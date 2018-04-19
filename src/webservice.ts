import fetch from 'node-fetch';

export default class WebService {
  constructor(options) {
    this.options = options;
  }

  get url() {
    return `${this.options.protocol}://${this.options.host}${this.options.root}`;
  }

  get Authorization() {
    return `Basic ${Buffer.from(`${this.options.key}:''`).toString('base64')}`;
  }

  get fetchOptions() {
    return {
      method: 'GET',
      headers: {Authorization: this.Authorization},
    };
  }

  makeURL(resource, query = {}) {
    const compoundQuery = Object.assign({}, this.options.query, query);
    const qs = Object.keys(compoundQuery)
      .map(key => [key,compoundQuery[key]].join('='))
      .join('&');
    return `${this.url}/${resource}?${qs}`;
  }

  async fetch(url) {
    try {
      const result = await fetch(url, this.fetchOptions);
      return await result.json();
    } catch (error) {
      console.error('WebService failed to fetch', url, error);
    }
  }
};
