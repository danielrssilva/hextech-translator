const playAudio = (source: string) => new Audio(source).play()

const prefix = 'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/sounds/';
const fileReady = `${prefix}sfx-readycheck-accept-button-click.ogg`
const generalHover = `${prefix}sfx-summoner-icons-grid-hover.ogg`
const buttonHover = `${prefix}po-sfx-uikit-button-gold-hover.ogg`
const buttonReady = `${prefix}npe-ft-sfx-button-startnow-hover.ogg`
const buttonClick = `${prefix}po-sfx-uikit-button-gold-click.ogg`
const generalClick = `${prefix}npe-ft-sfx-pip-forward-click.ogg`
const launcherReady = `${prefix}sfx-readycheck-outro-accepted.ogg`
const launcherError = `${prefix}sfx-readycheck-outro-declined.ogg`
const noFileFound = `${prefix}sfx-readycheck-decline-button-click.ogg`

export { playAudio, generalHover, buttonHover, buttonReady, buttonClick, generalClick, fileReady, launcherReady, launcherError, noFileFound }