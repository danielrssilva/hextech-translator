import { contextBridge, ipcRenderer } from 'electron'
import { Dispatch, SetStateAction } from 'react'
import { load, dump } from 'js-yaml'
import { readFileSync, writeFileSync } from 'fs'
import { execFile } from 'child_process'
import langs from '../src/constants/langs'

interface ILog {
  message: string
  type: string
}
export const api = {
  changeLanguage: (filePath: string, region: string, language: string, setLog: Dispatch<SetStateAction<ILog>>, setLoading: Dispatch<SetStateAction<boolean>>) => {
    setLog({ type: "info", message: `Changing ${region}'s language to ${langs.find(({ code }) => code === language)?.name}...` })

    const outputSystemYaml = filePath
    const systemYaml = load(
      readFileSync(outputSystemYaml, {
        encoding: 'utf-8',
      })
    )

    const result = JSON.parse(JSON.stringify(systemYaml, null, 2))
    result.region_data[region].available_locales = [language]
    result.region_data[region].default_locale = language
    writeFileSync(outputSystemYaml, dump(result))

    setLog({ type: "info", message: "Launching the client..." })
    execFile(
      filePath.replace('system.yaml', 'LeagueClient.exe'),
      function (err: any) {
        if (err) {
          setLog({ type: "error", message: err })
          return
        }
        setLoading(false);
        setLog({ type: "success", message: "Client launched! Have fun :)" })
      }
    )
  },
  openExternalPage: (url: string) => {
    require('electron').shell.openExternal(url);
  },
  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
