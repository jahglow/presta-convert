"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fetch_1 = require("node-fetch");
class WebService {
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
            headers: { Authorization: this.Authorization },
        };
    }
    makeURL(resource, query = {}) {
        const compoundQuery = Object.assign({}, this.options.query, query);
        const qs = Object.keys(compoundQuery)
            .map(key => [key, compoundQuery[key]].join('='))
            .join('&');
        return `${this.url}/${resource}?${qs}`;
    }
    fetch(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield node_fetch_1.default(url, this.fetchOptions);
                return yield result.json();
            }
            catch (error) {
                console.error('WebService failed to fetch', url, error);
            }
        });
    }
}
exports.default = WebService;
;
//# sourceMappingURL=webservice.js.map