"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const model_enums_1 = require("../../ts/enums/model_enums");
const common_2 = require("../../common");
const user_enum_1 = require("../../ts/enums/user_enum");
const string_hash_1 = require("../../utils/string.hash");
let SeedService = exports.SeedService = class SeedService {
    constructor(userModel, categoryModel, productModel, paymentModel, addressModel) {
        this.userModel = userModel;
        this.categoryModel = categoryModel;
        this.productModel = productModel;
        this.paymentModel = paymentModel;
        this.addressModel = addressModel;
    }
    async generateUserMockData() {
        const USER_ARRAY = [
            {
                id: '670b2bc9-c97b-494e-9f3b-82e299456c1f',
                type: user_enum_1.USER_ROLE.ADMIN,
                firstName: 'Tuan',
                lastName: 'Tran',
                address: 'HCM',
                email: 'tuantransn2001@gmail.com',
                phoneNumber: '0364977325',
                password: await string_hash_1.default.hash('password', 10),
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
            },
        ];
        for (let index = 0; index < 49; index++) {
            const userType = index % 2 === 0 ? user_enum_1.USER_ROLE.CUSTOMER : user_enum_1.USER_ROLE.GUEST;
            const newUser = {
                id: (0, uuid_1.v4)(),
                type: userType,
                firstName: userType +
                    ' ' +
                    (0, common_2.randomStringByCharsetAndLength)('alphabetic', 4, false),
                lastName: userType +
                    ' ' +
                    (0, common_2.randomStringByCharsetAndLength)('alphabetic', 4, false),
                address: `Số nhà ${(0, common_2.randomIntFromInterval)(1, 100)},địa chỉ: ${(0, common_2.randomStringByCharsetAndLength)('alphabetic', 10, false)},Tp.HCM`,
                email: `${(0, common_2.randomStringByCharsetAndLength)('alphabetic', 4, false)}@gmail.com`,
                phoneNumber: `0${(0, common_2.randomStringByCharsetAndLength)('numeric', 9, false)}`,
                password: await string_hash_1.default.hash('password', 10),
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
            };
            USER_ARRAY.push(newUser);
        }
        return USER_ARRAY;
    }
    generateCategoryMockData() {
        return [
            {
                id: (0, uuid_1.v4)(),
                subCategoryID: undefined,
                title: 'SOFAS & CHAIRS',
                subTitle: 'THE KEY TO COMFORT? START WITH AN EXCEPTIONAL SOFA.',
                description: [
                    'Every living space is different, whether you want to lounge, entertain or curl up. With our range of sofas and chairs, you’re certain to find the right style for the heart of your home, from traditional designs to modern modulars.',
                ],
                imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/Ralphie.webp',
                contents: [
                    {
                        title: 'SENSATIONAL STYLE',
                        content: [
                            'Our buyers literally search far and wide across the globe to find the best, high quality fashionable sofas that come from some of biggest and brightest names in design and manufacturing. Sink into designs from Orla Kiely, Collins & Hayes, Stressless, Parker Knoll, Himolla, ercol and many more.',
                        ],
                    },
                    {
                        title: `LET'S TRANSFORM YOUR SPACE`,
                        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
                        content: [
                            `Our ranges are available in numerous coloured fabrics and patterns, and we stock a beautiful array of both manual and electric recliner sofas, love seats, and chaise end combinations. Tempted to make a change.`,
                        ],
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                subCategoryID: undefined,
                title: 'BEDS & BEDROOM',
                subTitle: 'TREAT YOURSELF TO A BETTER NIGHT’S SLEEP, FOREVER.',
                description: [
                    `Don’t compromise when it comes to your comfort at night, and choose the right bed and bedroom furniture to turn a bedroom into your own personal sanctuary.`,
                    `At Lenleys Home we have a beautiful, extensive selection of beds and bedroom furniture on display in our showrooms ranging from traditional style to modern contemporary designs. `,
                ],
                imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
                contents: [
                    {
                        title: 'BEAUTIFUL BEDROOMS',
                        content: [
                            'We stock an eclectic and beautiful range of beds in all styles and sizes, including Vispring, Dunlopillo, Harrison Spinks, Hypnos, and ercol.',
                            ,
                            `Finish the look with bedside table, chests of drawers, dressing tables, wardrobes, storage chests and more, all in stunning matching styles. Need a mattress? We stock only the best in store.`,
                        ],
                    },
                    {
                        title: `LET'S TRANSFORM YOUR SPACE`,
                        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
                        content: [
                            `Our aim is to provide you with a range of home furnishing solutions that ensures you can realise your vision for your home. We are exceptionally proud of the reputation that we have built up over the years and we’re pleased to be well known for offering such a great range of beds and bedroom furniture in Kent.`,
                        ],
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                subCategoryID: undefined,
                title: 'LIVING ROOM',
                subTitle: 'BRING YOUR LIVING ROOM TO LIFE.',
                description: [
                    `Our range of living room furniture will allow you to build the perfect room to your exacting tastes with minimal fuss.`,
                ],
                imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2022/06/Avignon-Dining-17.jpg',
                contents: [
                    {
                        title: 'LUXURIOUS LIVING',
                        content: [
                            `Whether you want a sleek minimalist look to your chill out zone, or want oodles of sumptuous colours, textures and shapes, we stock everything you need to make your house a home, with coffee tables, lamp tables, console tables, desks and bookcases.`,
                        ],
                    },
                    {
                        title: `LET'S TRANSFORM YOUR SPACE`,
                        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
                        content: [
                            `Start browsing and building, and don’t forget to ask for our expert advice….`,
                        ],
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                subCategoryID: undefined,
                title: 'DINING ROOM',
                subTitle: 'IT’S TIME TO DINE OUT ON YOUR HOME’S NEW LOOK.',
                description: [
                    `At Lenleys Home we have a fantastic selection of dining room furniture on offer in our showrooms ranging from traditional style to contemporary design.`,
                ],
                imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
                contents: [
                    {
                        title: 'DIVINE DINING',
                        content: [
                            `We have a striking array of dining furniture, from some of the UK and Europe’s finest manufacturers, including Venjakob, Ercol, Habufa, ALF Italia, TCH, Cattelan Italia, Calligaris and many more. Like all of our furniture, our dining ranges can be bespoke to your needs, with many interchangeable options, finishes and sizes.`,
                        ],
                    },
                    {
                        title: `LET'S TRANSFORM YOUR SPACE`,
                        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
                        content: [
                            `Solid wood, sleek glass, marble top, hardened ceramic, traditional, contemporary, Scandinavian – the choice is yours at Lenleys.`,
                        ],
                    },
                ],
            },
            {
                id: (0, uuid_1.v4)(),
                subCategoryID: undefined,
                title: 'FLOORING',
                subTitle: 'INCREDIBLE FLOORING FOR ANY HOME',
                description: [
                    `The flooring design studio at Lenleys Home is host to some of the most trusted brands in flooring.`,
                ],
                imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
                contents: [
                    {
                        title: 'DIVINE DINING',
                        content: [
                            `We have a striking array of dining furniture, from some of the UK and Europe’s finest manufacturers, including Venjakob, Ercol, Habufa, ALF Italia, TCH, Cattelan Italia, Calligaris and many more. Like all of our furniture, our dining ranges can be bespoke to your needs, with many interchangeable options, finishes and sizes.`,
                        ],
                    },
                    {
                        title: `LET'S TRANSFORM YOUR SPACE`,
                        subTitle: `At Lenleys Home we have a passion for high quality furniture that suits all tastes and fashions.`,
                        content: [
                            `Solid wood, sleek glass, marble top, hardened ceramic, traditional, contemporary, Scandinavian – the choice is yours at Lenleys.`,
                        ],
                    },
                ],
            },
        ];
    }
    generateProductMockData() {
        const PRODUCT_ARRAY = [];
        const randomCategoryID = () => {
            const categoryLength = this.generateCategoryMockData().length;
            const randomIndex = (0, common_2.randomIntFromInterval)(0, categoryLength - 1);
            return this.generateCategoryMockData()[randomIndex].id;
        };
        for (let index = 0; index < 100; index++) {
            const newProduct = {
                id: (0, uuid_1.v4)(),
                name: `Product ${(0, common_2.randomStringByCharsetAndLength)('alphabetic', 10, false)}`,
                categoryID: randomCategoryID(),
                SKU: (0, common_2.randomStringByCharsetAndLength)('alphabetic', 6, true),
                classify: `in stock`,
                variants: [],
            };
            PRODUCT_ARRAY.push(newProduct);
            for (let index = 0; index < 3; index++) {
                const newProductVariant = {
                    id: (0, uuid_1.v4)(),
                    name: `${newProduct.name} ${index}`,
                    imgSrc: 'https://www.lenleys.co.uk/wp-content/uploads/2023/04/15501-jpg.webp',
                    price: '10000',
                    options: [
                        {
                            id: (0, uuid_1.v4)(),
                            k: 'Ottoman Storage',
                            v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/09/Ottoman-NoText.png',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            k: '2+2 Drawers',
                            v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/4-Drw-NoText-1.png',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            k: '2 Drawers',
                            v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/09/2-Drw-Side-NoText.png',
                        },
                    ],
                    details: [
                        {
                            id: (0, uuid_1.v4)(),
                            title: 'Description',
                            contents: [
                                {
                                    id: (0, uuid_1.v4)(),
                                    v: [
                                        'The Alex Range was created by Swedish designer Dan Ihreborn. Its unique thin, high backrest has a rounded shape that delivers a clean Scandi feel alongside great comfort. The Lumbar cushion gives great lower back support and adds a homely substance to the minimalist design of the Alex.',
                                    ],
                                },
                                {
                                    id: (0, uuid_1.v4)(),
                                    v: ['Available as 2.5 Seater Sofa, Chair & Footstool.'],
                                },
                                {
                                    id: (0, uuid_1.v4)(),
                                    v: [
                                        'Fixed foam back and removable foam seat cushion.',
                                        'Certified solid wood frame.',
                                        'Lumbar Cushion(s) included.',
                                        'Other fabrics & options are available, please visit us in store.',
                                    ],
                                },
                            ],
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            title: 'Delivery',
                            contents: [
                                {
                                    id: (0, uuid_1.v4)(),
                                    k: 'Accessories',
                                    v: [
                                        '£5 for mainland UK delivery. Delivery times can vary depending on suppliers and stock locations, but we will always aim to deliver accessory orders within 7-10 working days where delivery is available. For larger items such pictures and rugs at £15 delivery charge will be applied.',
                                    ],
                                },
                                {
                                    id: (0, uuid_1.v4)(),
                                    k: 'Furniture',
                                    v: [
                                        'Within Kent and East Sussex we charge a competitive flat rate of £65 as a contribution towards delivery and installation per order. We can also deliver to West Sussex and Surrey and the delivery contribution is £100.',
                                    ],
                                },
                                {
                                    id: (0, uuid_1.v4)(),
                                    v: [
                                        'Please see our Delivery Services page for more information.',
                                    ],
                                },
                            ],
                        },
                    ],
                };
                newProduct.variants.push(newProductVariant);
            }
        }
        return PRODUCT_ARRAY;
    }
    async onModuleInit() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
};
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enums_1.MODEL_NAME.USER)),
    __param(1, (0, common_1.Inject)(model_enums_1.MODEL_NAME.CATEGORY)),
    __param(2, (0, common_1.Inject)(model_enums_1.MODEL_NAME.PRODUCT)),
    __param(3, (0, common_1.Inject)(model_enums_1.MODEL_NAME.PAYMENT)),
    __param(4, (0, common_1.Inject)(model_enums_1.MODEL_NAME.ADDRESS)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], SeedService);
//# sourceMappingURL=seed.service.js.map