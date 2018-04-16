"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feature_relations = {
    dimensions: {
        title: [
            {
                label: 'Подсвечник',
                ids: [23, 24, 25],
            },
            {
                label: 'Часы',
                ids: [26, 27, 28],
            },
            {
                label: 'Стол',
                ids: [30, 31, 32, 82],
            },
            {
                label: 'Стул',
                ids: [33, 34, 35],
            },
            {
                label: 'Сундук',
                ids: [36, 37, 38],
            },
            {
                label: 'Чаша',
                ids: [39, 40, 41, 54],
            },
            {
                label: 'Кувшин',
                ids: [42, 43, 44, 61],
            },
            {
                label: 'Кадило',
                ids: [45, 46, 47],
            },
            {
                label: 'Книжный шкаф',
                ids: [48, 49, 50],
            },
            {
                label: 'Письменный стол',
                ids: [51, 52, 53],
            },
            {
                label: 'Диван',
                ids: [55, 56, 57],
            },
            {
                label: 'Кресло',
                ids: [58, 59, 60],
            },
            {
                label: 'Горшок',
                ids: [62, 63, 64, 65],
            },
            {
                label: 'Коробка',
                ids: [66, 67, 68],
            },
            {
                label: 'Тарелка',
                ids: [69, 70, 71, 72],
            },
            {
                label: 'Вставка',
                ids: [73, 83],
            },
            {
                label: 'Кровать',
                ids: [76, 77, 78],
            },
            {
                label: 'Комод',
                ids: [79, 80, 81],
            },
            {
                label: 'Кушетка',
                ids: [85, 86, 87],
            },
            {
                label: 'Шкаф',
                ids: [88, 89, 90],
            },
            {
                label: 'Столик',
                ids: [91, 92, 93],
            },
            {
                label: 'Торшер',
                ids: [95, 96, 97],
            },
            {
                label: '3-х местный диван',
                ids: [98, 99, 100],
            },
            {
                label: '2-х местный диван',
                ids: [101, 102, 103],
            },
            {
                label: 'Ваза',
                ids: [104, 105, 106, 107],
            },
            {
                label: 'Косматический столик',
                ids: [108, 109, 110],
            },
            {
                label: 'Маленький комод',
                ids: [111, 112, 113],
            },
            {
                label: 'Книжные полки',
                ids: [114, 115, 116],
            },
            {
                label: 'Зеркало',
                ids: [117, 118, 119],
            },
            {
                label: 'Консоль',
                ids: [120, 121, 122],
            },
            {
                label: 'Пепельница',
                ids: [123, 124],
            },
            {
                label: 'Посудный шкаф',
                ids: [125, 126, 127],
            },
            {
                label: 'Пуф',
                ids: [150, 149, 148],
            },
        ],
        x: [
            18,
            23,
            26,
            30,
            33,
            36,
            39,
            43,
            45,
            48,
            51,
            55,
            58,
            62,
            66,
            69,
            76,
            79,
            85,
            88,
            91,
            95,
            98,
            101,
            104,
            108,
            111,
            114,
            117,
            120,
            125,
            148,
        ],
        y: [
            20,
            25,
            28,
            32,
            35,
            38,
            41,
            42,
            47,
            50,
            53,
            57,
            60,
            64,
            68,
            71,
            78,
            81,
            87,
            90,
            93,
            97,
            100,
            103,
            106,
            110,
            113,
            116,
            119,
            122,
            124,
            127,
            150,
        ],
        z: [
            19,
            24,
            27,
            31,
            34,
            37,
            40,
            44,
            46,
            49,
            52,
            56,
            59,
            63,
            67,
            70,
            77,
            80,
            86,
            89,
            92,
            96,
            99,
            102,
            105,
            109,
            112,
            115,
            118,
            121,
            126,
            149,
        ],
        outerRadius: [29, 54, 61, 65, 72, 82, 94, 107, 123],
    },
    material: 16,
    productionDate: 15,
    manufacturer: 17,
    style: [
        14,
        {
            64: 'barocco',
            65: 'empire',
            66: 'rococo',
            346: 'rococo',
            343: 'art-deco',
            344: 'vintage',
            348: 'louis-15',
            349: 'artnouveau',
            350: 'classicism',
            351: 'modern',
            382: 'provence',
            359: 'neorenaissance',
            361: 'eclecticism',
            363: 'renaissance',
            367: 'biedermeier',
            369: 'henri-2',
            370: 'napoleon-iii',
            371: 'louis-philippe',
            377: 'chippendale',
            881: 'neoclassicism',
            886: 'neobarocco',
            3002: 'boulle',
            3350: 'modern',
        },
    ],
};
class Convert {
    constructor({ source, assignedManager, creator, changeDateAdded }) {
        this.ownership = () => {
            if (!this.assignedManager || !this.creator)
                throw new Error('product ownrship is not defined', this.assignedManager, this.creator);
            return {
                assignedManager: this.assignedManager,
                creator: this.creator,
            };
        };
        this.processFeatures = (features = this.source.associations.product_features) => {
            const featureTypes = Object.keys(feature_relations);
            const findMatch = (schema, acc, key, process) => {
                const feature = features.find(feature => feature.id === schema);
                if (!feature)
                    return acc;
                return Object.assign({}, acc, { [key]: typeof process === 'function' ? process(feature) : feature.value });
            };
            return featureTypes.reduce((acc, ft) => {
                const schema = feature_relations[ft];
                if (ft === 'material') {
                    return findMatch(schema, acc, ft, feature => [{ material: feature.value }]);
                }
                if (typeof schema === 'number') {
                    return findMatch(schema, acc, ft);
                }
                if (ft === 'style') {
                    const style = findMatch(schema[0], {}, ft, feature => schema[1][feature.id_feature_value]);
                    return style ? Object.assign({}, acc, style) : acc;
                }
                else if (ft === 'dimensions') {
                    const [title, ...keys] = Object.keys(schema);
                    const buffer = [];
                    keys.forEach(key => {
                        const dimension = schema[key];
                        dimension.forEach(dimensionSchema => {
                            const temp = findMatch(dimensionSchema, null, key, feature => (parseFloat(feature.value.replace(',', '.')) * 100).toFixed());
                            if (!!temp)
                                buffer.push([dimensionSchema, temp]);
                        });
                    });
                    const dimensions = schema[title].reduce((acc, name) => {
                        const match = buffer.filter(item => name.ids.includes(item[0]));
                        if (match.length > 0) {
                            acc.push(Object.assign({}, {
                                title: name.label,
                            }, ...match.map(d => d[1])));
                            match.forEach(matchItem => buffer.splice(buffer.indexOf(matchItem), 1));
                        }
                        return acc;
                    }, []);
                    if (buffer.length > 0) {
                        dimensions.push(Object.assign({}, ...buffer.map(d => d[1])));
                    }
                    return dimensions.length > 0 ? Object.assign({}, acc, { dimensions }) : acc;
                }
            }, {});
        };
        this.source = source;
        this.assignedManager = assignedManager;
        this.creator = creator;
        this.changeDateAdded = changeDateAdded;
    }
    convert() {
        return [
            'processFeatures',
            'locked',
            'categoryAvailability',
            'images',
            'price',
            'createdModified',
            'condition',
            'titleDescription',
            'ownership',
            'staffPicked',
        ].reduce((item, processorName) => Object.assign({}, item, this[processorName]()), {});
    }
    get category() {
        const { id_category_default, associations: { categories } } = this.source;
        return categories.find(cat => String(cat.id) === String(id_category_default));
    }
    composeImageURL({ bucket, imageId, size, token }) {
        const sizes = {
            large: 'thickbox_default',
            medium: 'large_default',
            thumb: 'cart_default',
        };
        return `https://www.rumsiskiubaldai.lt/${imageId}-${sizes[size]}/${token}.jpg`;
    }
    images() {
        const { id_default_image, associations: { images: _images }, link_rewrite } = this.source;
        const sizes = ['large', 'medium', 'thumb'];
        const bucket = 'rumsiskiubaldai.lt';
        const images = _images.reduce((img, { id }, index) => Object.assign({}, img, {
            [id]: Object.assign({ order: index, bucket }, ...sizes.map(size => ({
                [size]: link_rewrite,
            }))),
        }), {});
        const coverImage = this.composeImageURL({ bucket, imageId: id_default_image, size: 'medium', token: link_rewrite });
        return { images, coverImage };
    }
    createdModified() {
        return {
            created: this.source.force_as_new || this.changeDateAdded ? new Date().getTime() : this.source.date_add,
            modified: this.source.date_upd,
        };
    }
    condition() {
        return { itemCondition: [{ itemCondition: !this.source.restored ? 'б/у' : 'после реставрации' }] };
    }
    titleDescription() {
        const { name, description } = this.source;
        return {
            title: name,
            description: description.replace(/<[^>]*>?/g, ''),
        };
    }
    price() {
        return {
            price: this.source.price,
            currency: 'EUR',
        };
    }
    locked() {
        const { reserved, date_upd } = this.source;
        return {
            locked: reserved ? date_upd : null,
            reserved: null,
            sold: null,
        };
    }
    categoryAvailability() {
        const { visibility } = this.source;
        const match = this.category;
        const category = match ? match.rel : undefined;
        return {
            category,
            availability: visibility === 'both' ? 'order' : 'sold',
        };
    }
    staffPicked() {
        return this.source.certified ? { staffPicked: true } : null;
    }
}
exports.default = Convert;
;
