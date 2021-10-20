import * as core from '@actions/core'

export function indentation(level: number): string {
  return '  '.repeat(level)
}

export function anchorIdentifier(text: string): string {
  return `#user-content-${text.toLowerCase()}`
}

export function escapeHashSign(text: string): string {
  core.info(text)
  return text.replace(/#/g, '<span>#</span>')
}
