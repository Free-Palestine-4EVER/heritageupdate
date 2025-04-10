declare module "negotiator" {
  interface NegotiatorOptions {
    headers: Record<string, string>
  }

  class Negotiator {
    constructor(options: NegotiatorOptions)
    languages(available?: string[]): string[]
    charset(available?: string[]): string
    encoding(available?: string[]): string
    mediaType(available?: string[]): string
  }

  export = Negotiator
}

