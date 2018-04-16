import {pick} from 'lodash';
import WebService from './webservice';

const product_features = [
  {id: 9, position: '11', name: 'Rezervuota'},
  {id: 10, position: '10', name: 'Atstatyta'},
  {id: 11, position: '9', name: 'Išparduodama'},
  {id: 14, position: '5', name: 'Стиль'},
  {id: 15, position: '6', name: 'Период'},
  {id: 16, position: '8', name: 'Материал'},
  {id: 17, position: '7', name: 'Страна происхождения'},
  {id: 18, position: '1', name: 'Длина'},
  {id: 19, position: '2', name: 'Ширина'},
  {id: 20, position: '3', name: 'Высота'},
  {id: 23, position: '12', name: 'Подсвечника  длина'},
  {id: 24, position: '13', name: 'Подсвечника  ширина'},
  {id: 25, position: '14', name: 'Подсвечника  высота'},
  {id: 26, position: '15', name: 'Часов   длина'},
  {id: 27, position: '16', name: 'Часов  ширина'},
  {id: 28, position: '17', name: 'Часов  высота'},
  {id: 29, position: '0', name: 'Диаметр'},
  {id: 30, position: '19', name: 'Стола  длина'},
  {id: 31, position: '20', name: 'Стола ширина'},
  {id: 32, position: '21', name: 'Стола высота'},
  {id: 33, position: '23', name: 'Стула  длина'},
  {id: 34, position: '24', name: 'Стула ширина'},
  {id: 35, position: '25', name: 'Стула высота'},
  {id: 36, position: '26', name: 'Сундука  длина'},
  {id: 37, position: '27', name: 'Сундука  ширина'},
  {id: 38, position: '28', name: 'Сундука высота'},
  {id: 39, position: '30', name: 'Чашы длина'},
  {id: 40, position: '31', name: 'Чашы  ширина'},
  {id: 41, position: '32', name: 'Чашы  высота'},
  {id: 42, position: '36', name: 'Кувшина высота'},
  {id: 43, position: '34', name: 'Кувшина  длина'},
  {id: 44, position: '35', name: 'Кувшина ширина'},
  {id: 45, position: '37', name: 'Кадила длина'},
  {id: 46, position: '38', name: 'Кадила ширина'},
  {id: 47, position: '39', name: 'Кадила высота'},
  {id: 48, position: '40', name: 'Книжного шкафа длина'},
  {id: 49, position: '41', name: 'Книжного шкафа ширина'},
  {id: 50, position: '42', name: 'Книжного шкафа высота'},
  {id: 51, position: '43', name: ' Письменного стола длина'},
  {id: 52, position: '44', name: 'Письменного стола ширина'},
  {id: 53, position: '45', name: 'Письменного стола высота'},
  {id: 54, position: '29', name: 'Чашы диаметр'},
  {id: 55, position: '46', name: 'Дивана длина'},
  {id: 56, position: '47', name: 'Дивана  ширина'},
  {id: 57, position: '48', name: 'Дивана высота'},
  {id: 58, position: '49', name: 'Кресла длина'},
  {id: 59, position: '50', name: 'Кресла ширина'},
  {id: 60, position: '51', name: 'Кресла высота'},
  {id: 61, position: '33', name: 'Кувшина  диаметр'},
  {id: 62, position: '53', name: 'Горшка  длина'},
  {id: 63, position: '54', name: 'Горшка  ширина'},
  {id: 64, position: '55', name: 'Горшка  высота'},
  {id: 65, position: '52', name: 'Горшка  диаметр'},
  {id: 66, position: '56', name: 'Каробки длина'},
  {id: 67, position: '57', name: 'Каробки ширина'},
  {id: 68, position: '58', name: 'Каробки высота'},
  {id: 69, position: '60', name: 'Тарелки длина'},
  {id: 70, position: '61', name: 'Тарелки ширина'},
  {id: 71, position: '62', name: 'Тарелки высота'},
  {id: 72, position: '59', name: 'Тарелки диаметр'},
  {id: 73, position: '4', name: 'Вставка'},
  {id: 76, position: '63', name: 'Кровати длина'},
  {id: 77, position: '64', name: 'Кровати ширина'},
  {id: 78, position: '65', name: 'Кровати высота'},
  {id: 79, position: '66', name: 'Камода длина'},
  {id: 80, position: '67', name: 'Камода ширина'},
  {id: 81, position: '68', name: 'Камода высота'},
  {id: 82, position: '18', name: 'Стола  диаметр'},
  {id: 83, position: '22', name: 'Стола  вставка'},
  {id: 85, position: '69', name: 'Кушетки длина'},
  {id: 86, position: '70', name: 'Кушетки ширина'},
  {id: 87, position: '71', name: 'Кушетки высота'},
  {id: 88, position: '72', name: 'Шкафа длина'},
  {id: 89, position: '73', name: 'Шкафа ширина'},
  {id: 90, position: '74', name: 'Шкафа высота'},
  {id: 91, position: '76', name: 'Столика длина'},
  {id: 92, position: '77', name: 'Столика ширина'},
  {id: 93, position: '78', name: 'Столика высота'},
  {id: 94, position: '75', name: 'Столика диаметр'},
  {id: 95, position: '79', name: 'Торшера длина'},
  {id: 96, position: '80', name: 'Торшера ширина'},
  {id: 97, position: '81', name: 'Торшера высота'},
  {id: 98, position: '82', name: '3-х местного дивана длина'},
  {id: 99, position: '83', name: '3-х местного дивана ширина'},
  {id: 100, position: '84', name: '3-х местного дивана высота'},
  {id: 101, position: '85', name: '2-х местного дивана длина'},
  {id: 102, position: '86', name: '2-х местного дивана ширина'},
  {id: 103, position: '87', name: '2-х местного дивана высота'},
  {id: 104, position: '89', name: 'Вазы длина'},
  {id: 105, position: '90', name: 'Вазы ширина'},
  {id: 106, position: '91', name: 'Вазы высота'},
  {id: 107, position: '88', name: 'Вазы диаметр'},
  {id: 108, position: '92', name: 'Косметического столика длина'},
  {id: 109, position: '93', name: 'Косметического столика ширина'},
  {id: 110, position: '94', name: 'Косметического столика высота'},
  {id: 111, position: '95', name: ' Маленького камода длина'},
  {id: 112, position: '96', name: 'Маленького камода  ширина'},
  {id: 113, position: '97', name: 'Маленького камода  высота'},
  {id: 114, position: '98', name: 'Книжных полок длина'},
  {id: 115, position: '99', name: 'Книжных полок ширина'},
  {id: 116, position: '100', name: 'Книжных полок высота'},
  {id: 117, position: '101', name: 'Зеркала длина'},
  {id: 118, position: '102', name: 'Зеркала ширина'},
  {id: 119, position: '103', name: 'Зеркала высота'},
  {id: 120, position: '104', name: 'Консоли длина'},
  {id: 121, position: '105', name: 'Консоли ширина'},
  {id: 122, position: '106', name: 'Консоли высота'},
  {id: 123, position: '107', name: 'Пепельницы диаметр'},
  {id: 124, position: '110', name: 'Пепельницы высота'},
  {id: 125, position: '111', name: 'Посудного шкафа длина'},
  {id: 126, position: '112', name: 'Посудного шкафа ширина'},
  {id: 127, position: '113', name: 'Посудного шкафа высота'},
  {id: 128, position: '114', name: 'Banketės ilgis'},
  {id: 129, position: '115', name: 'Banketės plotis'},
  {id: 130, position: '116', name: 'Banketės aukštis'},
  {id: 131, position: '117', name: 'Arbatinuko diametras'},
  {id: 132, position: '118', name: 'Arbatinuko ilgis'},
  {id: 133, position: '119', name: 'Arbatinuko plotis'},
  {id: 134, position: '120', name: 'Arbatinuko aukštis'},
  {id: 135, position: '121', name: 'Indelio diametras'},
  {id: 136, position: '122', name: 'Indelio ilgis'},
  {id: 137, position: '123', name: 'Indelio plotis'},
  {id: 138, position: '124', name: 'Indelio aukštis'},
  {id: 139, position: '108', name: 'Peleninės ilgis'},
  {id: 140, position: '109', name: 'Peleninės plotis'},
  {id: 141, position: '125', name: 'Bufeto ilgis'},
  {id: 142, position: '126', name: 'Bufeto plotis'},
  {id: 143, position: '127', name: 'Bufeto aukštis'},
  {id: 144, position: '128', name: 'Stovo ilgis'},
  {id: 145, position: '129', name: 'Stovo plotis'},
  {id: 146, position: '130', name: 'Stovo diametras'},
  {id: 147, position: '131', name: 'Stovo aukštis'},
  {id: 148, position: '132', name: ' размеры пуфика'},
  {id: 149, position: '133', name: 'Pufo plotis'},
  {id: 150, position: '134', name: 'Pufo aukštis'},
  {id: 151, position: '135', name: 'Čiužinio ilgis'},
  {id: 152, position: '136', name: 'Čiužinio plotis'},
  {id: 153, position: '137', name: 'Vyšnia'},
];

const categories = [
  {id: 1, id_parent: 0, name: 'Root', link_rewrite: 'root'},
  {id: 2, id_parent: 1, name: 'Home', link_rewrite: 'home'},
  {id: 607, id_parent: 2, name: 'Мебель ', link_rewrite: 'mebel-'},
  {id: 608, id_parent: 2, name: 'Старинные вещи ', link_rewrite: 'starinnye-vesshi-'},
  {id: 609, id_parent: 2, name: 'Картины и зеркала', link_rewrite: 'kartiny-i-zerkala'},
  {id: 610, id_parent: 2, name: 'Столовые приборы', link_rewrite: 'stolovye-pribory'},
  {id: 611, id_parent: 2, name: 'Освещение', link_rewrite: 'osvesshenie'},
  {id: 612, id_parent: 2, name: 'Часы', link_rewrite: 'chasy'},
  {id: 684, id_parent: 2, name: 'Продукты по заказу', link_rewrite: 'produkty-po-zakazu'},
  {id: 685, id_parent: 2, name: 'Akcija', link_rewrite: 'akcija'},
  {id: 179, id_parent: 124, rel: 'spalni-krovati', name: 'Кровати', link_rewrite: 'beds'},
  {id: 180, id_parent: 124, rel: 'spalni-krovati', name: 'Комплекты для спальни', link_rewrite: 'bedroom-suites'},
  {id: 182, id_parent: 125, rel: 'stulya', name: 'Стулья', link_rewrite: 'chairs'},
  {id: 183, id_parent: 125, rel: 'stolovie-gruppi', name: 'Столы и стулья', link_rewrite: 'tables-and-chairs'},
  {id: 188, id_parent: 127, rel: 'prihozie-veshalki', name: 'Комплекты для прихожей', link_rewrite: 'hallway-suites'},
  {id: 189, id_parent: 128, rel: 'stoli', name: 'Секретеры', link_rewrite: 'secretaires'},
  {id: 193, id_parent: 129, rel: 'posuda', name: 'Вазы и посуда', link_rewrite: 'vases-and-dishes'},
  {id: 194, id_parent: 129, rel: 'chasi', name: 'Часы', link_rewrite: 'clocks'},
  {id: 216, id_parent: 128, rel: 'myagkaya-mebel', name: 'Кресла', link_rewrite: 'armchairs'},
  {id: 613, id_parent: 607, rel: 'stulya', name: ' Банкетки - пуфы - скамейки', link_rewrite: 'banketki-pufy-skamejki'},
  {
    id: 614,
    id_parent: 607,
    rel: 'cabinets',
    name: ' Этажерки - книжные шкафы',
    link_rewrite: '-etazherki-knizhnye-shkafy',
  },
  {id: 615, id_parent: 607, rel: 'myagkaya-mebel', name: 'Кресла ', link_rewrite: 'kresla-'},
  {id: 616, id_parent: 607, rel: 'vitrinibufeti', name: 'Буфеты - витрины ', link_rewrite: 'bufety-vitriny-'},
  {id: 617, id_parent: 607, rel: 'stulya', name: 'Стулья ', link_rewrite: 'stulya-'},
  {id: 618, id_parent: 607, rel: 'shkafi', name: 'Книжные полки', link_rewrite: 'knizhnye-polki'},
  {id: 619, id_parent: 607, rel: 'cabinets', name: 'Книжные шкафы', link_rewrite: 'knizhnye-shkafy'},
  {id: 620, id_parent: 607, rel: 'komodi', name: 'Комоды', link_rewrite: 'komody'},
  {id: 621, id_parent: 607, rel: 'konsoli', name: 'Консоли ', link_rewrite: 'konsoli-'},
  {id: 622, id_parent: 607, rel: 'stoli', name: 'Косметические столики', link_rewrite: 'kosmeticheskie-stoliki'},
  {id: 623, id_parent: 607, rel: 'spalni-krovati', name: 'Кровати ', link_rewrite: 'krovati-'},
  {id: 624, id_parent: 607, rel: 'spalni-krovati', name: 'Спальные гарнитуры ', link_rewrite: 'spalnye-garnitury-'},
  {id: 625, id_parent: 607, rel: 'myagkaya-mebel', name: 'Угловой диван', link_rewrite: 'uglovoj-divan'},
  {id: 626, id_parent: 607, rel: 'myagkaya-mebel', name: 'Мягкие комплекты ', link_rewrite: 'myagkie-komplekty-'},
  {id: 627, id_parent: 607, rel: 'myagkaya-mebel', name: 'Кожаные комплекты ', link_rewrite: 'kozhanye-komplekty-'},
  {
    id: 628,
    id_parent: 607,
    rel: 'prihozie-veshalki',
    name: 'Комплекты мебели для прихожей',
    link_rewrite: 'komplekty-mebeli-dlya-prikhozhej',
  },
  {id: 629, id_parent: 607, rel: 'stoli', name: 'Письменные столы ', link_rewrite: 'pismennye-stoly-'},
  {id: 630, id_parent: 607, rel: 'stoli', name: 'Секретеры', link_rewrite: 'sekretery'},
  {
    id: 631,
    id_parent: 607,
    rel: 'myagkaya-mebel',
    name: 'Диваны - мягкие скамейки',
    link_rewrite: 'divany-myagkie-skamejki',
  },
  {id: 632, id_parent: 607, rel: 'shkafi', name: 'Шкафы', link_rewrite: 'shkafy'},
  {id: 633, id_parent: 607, rel: 'stoli', name: 'Столы ', link_rewrite: 'stoly-'},
  {id: 634, id_parent: 607, rel: 'stoli', name: 'Столики ', link_rewrite: 'stoliki-'},
  {
    id: 635,
    id_parent: 607,
    rel: 'stolovie-gruppi',
    name: 'Комплекты для столовой ',
    link_rewrite: 'komplekty-dlya-stolovoj-',
  },
  {id: 636, id_parent: 607, rel: 'predmeti-interera-i-isskustva', name: 'Другое ', link_rewrite: 'drugoe-'},
  {id: 637, id_parent: 608, rel: 'predmeti-interera-i-isskustva', name: 'Глобусы ', link_rewrite: 'globusy-'},
  {
    id: 638,
    id_parent: 608,
    rel: 'predmeti-interera-i-isskustva',
    name: 'Оружие, милитаристика',
    link_rewrite: 'oruzhie-militaristika',
  },
  {id: 639, id_parent: 608, rel: 'kartini', name: 'Иконы ', link_rewrite: 'ikony-'},
  {
    id: 640,
    id_parent: 608,
    rel: 'predmeti-interera-i-isskustva',
    name: 'Кассовые аппараты',
    link_rewrite: 'kassovye-apparaty',
  },
  {id: 641, id_parent: 608, rel: 'carpets', name: 'Ковры', link_rewrite: 'kovry'},
  {id: 642, id_parent: 608, rel: 'predmeti-interera-i-isskustva', name: 'Книги ', link_rewrite: 'knigi-'},
  {
    id: 643,
    id_parent: 608,
    rel: 'predmeti-interera-i-isskustva',
    name: 'Музыкальные инструменты ',
    link_rewrite: 'muzykalnye-instrumenty-',
  },
  {id: 644, id_parent: 608, rel: 'kartini', name: 'Настенные гобелены', link_rewrite: 'nastennye-gobeleny'},
  {id: 645, id_parent: 607, rel: 'predmeti-interera-i-isskustva', name: 'Сундуки', link_rewrite: 'sunduki'},
  {id: 646, id_parent: 608, rel: 'statue', name: 'Статуэтки - фигурки', link_rewrite: 'statuetki-figurki'},
  {
    id: 647,
    id_parent: 608,
    rel: 'predmeti-interera-i-isskustva',
    name: 'Пишущие машинки',
    link_rewrite: 'pishusshie-mashinki',
  },
  {id: 648, id_parent: 610, rel: 'vase-kaspo', name: 'Вазы ', link_rewrite: 'vazy-'},
  {id: 649, id_parent: 608, rel: 'predmeti-interera-i-isskustva', name: 'Игры', link_rewrite: 'igry'},
  {id: 650, id_parent: 608, rel: 'pechi-kamini', name: 'Принадлежности камина', link_rewrite: 'prinadlezhnosti-kamina'},
  {id: 651, id_parent: 608, rel: 'predmeti-interera-i-isskustva', name: 'Подсвечники ', link_rewrite: 'podsvechniki-'},
  {id: 652, id_parent: 608, rel: 'predmeti-interera-i-isskustva', name: 'Другое ', link_rewrite: 'drugoe-'},
  {id: 653, id_parent: 609, rel: 'kartini', name: 'Графические работы', link_rewrite: 'graficheskie-raboty'},
  {id: 654, id_parent: 609, rel: 'kartini', name: 'Репродукции ', link_rewrite: 'reprodukcii-'},
  {id: 655, id_parent: 609, rel: 'kartini', name: 'Рамки', link_rewrite: 'ramki'},
  {id: 656, id_parent: 609, rel: 'kartini', name: 'Шелкография', link_rewrite: 'shelkografiya'},
  {id: 657, id_parent: 609, rel: 'kartini', name: 'Картины', link_rewrite: 'kartiny'},
  {id: 658, id_parent: 609, rel: 'zerkala', name: 'Зеркала ', link_rewrite: 'zerkala-'},
  {id: 659, id_parent: 609, rel: 'predmeti-interera-i-isskustva', name: 'Другое ', link_rewrite: 'drugoe-'},

  {id: 660, id_parent: 610, rel: 'posuda', name: 'Чайники', link_rewrite: 'chajniki'},
  {id: 661, id_parent: 610, rel: 'posuda', name: 'Чайныйе наборы', link_rewrite: 'chajnyje-nabory'},
  {id: 662, id_parent: 610, rel: 'posuda', name: 'Кувшины', link_rewrite: 'kuvshiny'},
  {id: 663, id_parent: 610, rel: 'posuda', name: 'Графины', link_rewrite: 'grafiny'},
  {id: 664, id_parent: 610, rel: 'posuda', name: 'Тарелки', link_rewrite: 'tarelki'},
  {id: 665, id_parent: 610, rel: 'posuda', name: 'Столовые сервизы', link_rewrite: 'stolovye-servizy'},
  {id: 666, id_parent: 610, rel: 'posuda', name: 'Столовые приборы', link_rewrite: 'stolovye-pribory'},
  {id: 667, id_parent: 610, rel: 'posuda', name: 'Фужеры', link_rewrite: 'fuzhery'},
  {id: 668, id_parent: 610, rel: 'posuda', name: 'Другое ', link_rewrite: 'drugoe-'},
  {id: 669, id_parent: 611, rel: 'osveshchenie', name: 'Подвесные люстры', link_rewrite: 'podvesnye-lyustry'},
  {
    id: 670,
    id_parent: 611,
    rel: 'osveshchenie',
    name: 'Настенные светильники  – бра',
    link_rewrite: 'nastennye-svetilniki-bra',
  },
  {id: 671, id_parent: 611, rel: 'osveshchenie', name: 'Настольные лампы', link_rewrite: 'nastolnye-lampy'},
  {id: 672, id_parent: 611, rel: 'osveshchenie', name: 'Торшеры', link_rewrite: 'torshery'},
  {id: 673, id_parent: 611, rel: 'osveshchenie', name: 'Другое ', link_rewrite: 'drugoe-'},
  {id: 674, id_parent: 612, rel: 'chasi', name: 'Напольные, настольные часы', link_rewrite: 'napolnye-nastolnye-chasy'},
  {id: 675, id_parent: 612, rel: 'chasi', name: 'Наручные, карманные часы', link_rewrite: 'naruchnye-karmannye-chasy'},
  {id: 676, id_parent: 612, rel: 'chasi', name: 'Настенные часы', link_rewrite: 'nastennye-chasy'},
  {id: 677, id_parent: 612, rel: 'chasi', name: 'Другие', link_rewrite: 'drugie'},
];

const toObject = collection => collection.reduce((acc, cat) => Object.assign({}, acc, {[cat.id]: cat}), {});

export default class Presta {
  constructor(webServiceConfig) {
    this.webservice = new WebService(webServiceConfig);
    this._cache = {
      categories: toObject(categories),
      product_features: toObject(product_features),
    };
  }

  async resource(resourceName, resourcePath, query) {
    const url = this.webservice.makeURL(resourcePath, query);
    const result = await this.webservice.fetch(url);
    return result[resourceName];
  }

  async getGenericResource(collectionName, collectionItemName, query) {
    const collection = await this.resource(collectionName, collectionName, query);
    return await Promise.all(
      collection.map(item => this.getGenericResourceItem({item, collectionName, collectionItemName}))
    );
  }

  async getGenericResourceItem({item: {id}, collectionName, collectionItemName: cIN}) {
    const collectionItemName = cIN || collectionName.substring(0, collectionName.length - 1);
    const {_sanitize, ...model} = this.models[collectionItemName];
    const entry = await this.resource(collectionItemName, `${collectionName}/${id}`);
    const sanitizedEntry = _sanitize ? pick(entry, _sanitize) : entry;
    const fieldsToParse = Object.keys(model);
    const parsedFields = await Promise.all(fieldsToParse.map(async key => await model[key](sanitizedEntry[key], id)));
    const parsedEntry = parsedFields.reduce(
      (acc, value, index) => Object.assign({}, acc, {[fieldsToParse[index]]: value}),
      sanitizedEntry
    );
    return parsedEntry;
  }

  _getLanguageString = data => {
    if (Array.isArray(data)) {
      const item = data.find(item => Number(item.id) === this.webservice.options.language);
      return !!item && item.value ? item.value : null;
    }
  };
  _toBoolean = data => Boolean(Number(data));
  _toNumber = data => parseInt(data, 10);
  _toDate = data => new Date(data).getTime();

  _getCachedCollection = (collection, cache = false, getItem) => async itemConfig => {
    return await Promise.all(
      collection.map(async _item => {
        const item = typeof getItem === 'function' ? getItem(_item) : _item;
        const cacheSource = this._cache[itemConfig.collectionName];
        if (cache) {
          if (!!cacheSource && cacheSource[item.id]) {
            //console.log('serving', itemConfig.collectionName, item.id, 'from cache', cacheSource[item.id]);
            return cacheSource[item.id];
          }
        }
        const response = await this.getGenericResourceItem(Object.assign({}, itemConfig, {item}));
        if (cache) {
          if (!cacheSource) this._cache[itemConfig.collectionName] = {};
          this._cache[itemConfig.collectionName][response.id] = response;
        }
        return response;
      })
    );
  };

  _getAssociations = async ({categories, images, product_features, stock_availables}, id) => {
    const parsedCategories = await this._getCachedCollection(categories, true)({
      collectionName: 'categories',
      collectionItemName: 'category',
    });
    const parsedFeatures = await this._getCachedCollection(product_features, true)({
      collectionName: 'product_features',
    });
    const parsedFeatureValues = await this._getCachedCollection(product_features, false, ({id_feature_value}) => ({
      id: id_feature_value,
    }))({
      collectionName: 'product_feature_values',
    });
    const compoundFeatures = parsedFeatures.map((feature, index) =>
      Object.assign({}, {id_feature_value: parsedFeatureValues[index].id, ...parsedFeatureValues[index]}, feature)
    );

    return {
      categories: parsedCategories,
      product_features: compoundFeatures,
      images,
    };
  };

  get models() {
    return {
      product_option: {
        name: this._getLanguageString,
        public_name: this._getLanguageString,
      },
      product_feature: {
        name: this._getLanguageString,
      },
      product_feature_value: {
        value: this._getLanguageString,
      },
      product: {
        _sanitize: [
          'visibility', // none = sold, both = available
          'associations',
          'description',
          'product_features',
          'stock_availables',
          'certified',
          'force_as_new',
          'name',
          'price',
          'link_rewrite',
          'reserved', // ==locked
          'restored', //- after restoration
          'id_category_default',
          'id_default_image',
          'date_add',
          'date_upd',
        ],

        name: this._getLanguageString,
        associations: this._getAssociations,
        description: this._getLanguageString,
        link_rewrite: this._getLanguageString,
        certified: this._toBoolean,
        force_as_new: this._toBoolean,
        reserved: this._toBoolean,
        restored: this._toBoolean,
        price: this._toNumber,
        id_category_default: this._toNumber,
        id_default_image: this._toNumber,
        date_add: this._toDate,
        date_upd: this._toDate,
      },
      category: {
        _sanitize: [/* 'associations', 'description',  */ 'id', 'id_parent', 'name', 'link_rewrite'],
        name: this._getLanguageString,
        id_parent: this._toNumber,
        //description: this._getLanguageString,
        link_rewrite: this._getLanguageString,
      },
    };
  }

  // client-facing api
  getProducts = query => this.getGenericResource('products', null, query);
  getProductsList = query => this.resource('products', 'products', query);
  getProduct = id => this.getGenericResourceItem({item: {id}, collectionName: 'products'});
};
