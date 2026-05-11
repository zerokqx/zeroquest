import Mustache from 'mustache';


interface MfaSenderRenderTemplate {
  login: string;
  code: string;
}

export abstract class MfaSender {
  abstract template: string;
  abstract send(data: unknown): Promise<unknown>;

  renderTemplate(data: MfaSenderRenderTemplate) {
    return Mustache.render(this.template, data);
  }
}
