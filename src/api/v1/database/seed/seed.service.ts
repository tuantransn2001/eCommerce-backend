import { v4 as uuidv4 } from 'uuid';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { MODEL_NAME } from '../../ts/enums/model_enums';
import { Category } from '../../ts/interfaces/category.d.type';
import { User } from '../../ts/interfaces/user.d.type';
import {
  handleSeedData,
  randomIntFromInterval,
  randomStringByCharsetAndLength,
} from '../../common';
import { USER_ROLE } from '../../ts/enums/user_enum';
import HashStringHandler from '../../utils/string.hash';
import { Product } from '../../ts/interfaces/product.d.type';
import {
  ADDRESS_SEEDER,
  CATEGORY_SEEDER,
  PAYMENT_SEEDER,
  PRODUCT_SEEDER,
  USER_SEEDER,
} from '../../data/seeder';
import { Payment } from '../../ts/interfaces/payment.type';
import { Address } from '../../ts/interfaces/address.d.type';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @Inject(MODEL_NAME.USER)
    private readonly userModel: Model<User>,
    @Inject(MODEL_NAME.CATEGORY)
    private readonly categoryModel: Model<Category>,
    @Inject(MODEL_NAME.PRODUCT)
    private readonly productModel: Model<Product>,
    @Inject(MODEL_NAME.PAYMENT)
    private readonly paymentModel: Model<Payment>,
    @Inject(MODEL_NAME.ADDRESS)
    private readonly addressModel: Model<Address>,
  ) {}
  public async generateUserMockData() {
    const USER_ARRAY: User[] = [
      {
        id: '670b2bc9-c97b-494e-9f3b-82e299456c1f',
        type: USER_ROLE.ADMIN,
        firstName: 'Tuan',
        lastName: 'Tran',
        address: 'HCM',
        email: 'tuantransn2001@gmail.com',
        phoneNumber: '0364977325',
        password: await HashStringHandler.hash('password', 10),
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
      },
    ];

    for (let index = 0; index < 49; index++) {
      const userType = index % 2 === 0 ? USER_ROLE.CUSTOMER : USER_ROLE.GUEST;
      const newUser: User = {
        id: uuidv4(),
        type: userType,
        firstName: userType + '_' + index,
        lastName:
          userType +
          '_' +
          randomStringByCharsetAndLength('alphabetic', 4, false),
        address: `Số nhà ${randomIntFromInterval(
          1,
          100,
        )},địa chỉ: ${randomStringByCharsetAndLength(
          'alphabetic',
          10,
          false,
        )},Tp.HCM`,
        email: `${randomStringByCharsetAndLength(
          'alphabetic',
          4,
          false,
        )}@gmail.com`,
        phoneNumber: `0${randomStringByCharsetAndLength('numeric', 9, false)}`,
        password: await HashStringHandler.hash('password', 10),
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',
      };
      USER_ARRAY.push(newUser);
    }
    return USER_ARRAY;
  }
  public generateCategoryMockData() {
    return [
      {
        id: uuidv4(),
        subCategoryID: undefined,
        title: 'SOFAS & CHAIRS',
        subTitle: 'THE KEY TO COMFORT? START WITH AN EXCEPTIONAL SOFA.',
        description: [
          'Every living space is different, whether you want to lounge, entertain or curl up. With our range of sofas and chairs, you’re certain to find the right style for the heart of your home, from traditional designs to modern modulars.',
        ],
        imgSrc:
          'https://www.lenleys.co.uk/wp-content/uploads/2022/03/Ralphie.webp',
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
        id: uuidv4(),
        subCategoryID: undefined,
        title: 'BEDS & BEDROOM',
        subTitle: 'TREAT YOURSELF TO A BETTER NIGHT’S SLEEP, FOREVER.',
        description: [
          `Don’t compromise when it comes to your comfort at night, and choose the right bed and bedroom furniture to turn a bedroom into your own personal sanctuary.`,
          `At Lenleys Home we have a beautiful, extensive selection of beds and bedroom furniture on display in our showrooms ranging from traditional style to modern contemporary designs. `,
        ],
        imgSrc:
          'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
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
        id: uuidv4(),
        subCategoryID: undefined,
        title: 'LIVING ROOM',
        subTitle: 'BRING YOUR LIVING ROOM TO LIFE.',
        description: [
          `Our range of living room furniture will allow you to build the perfect room to your exacting tastes with minimal fuss.`,
        ],
        imgSrc:
          'https://www.lenleys.co.uk/wp-content/uploads/2022/06/Avignon-Dining-17.jpg',
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
        id: uuidv4(),
        subCategoryID: undefined,
        title: 'DINING ROOM',
        subTitle: 'IT’S TIME TO DINE OUT ON YOUR HOME’S NEW LOOK.',
        description: [
          `At Lenleys Home we have a fantastic selection of dining room furniture on offer in our showrooms ranging from traditional style to contemporary design.`,
        ],
        imgSrc:
          'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
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
        id: uuidv4(),
        subCategoryID: undefined,
        title: 'FLOORING',
        subTitle: 'INCREDIBLE FLOORING FOR ANY HOME',
        description: [
          `The flooring design studio at Lenleys Home is host to some of the most trusted brands in flooring.`,
        ],
        imgSrc:
          'https://www.lenleys.co.uk/wp-content/uploads/2022/03/tch302-1024x576.jpg',
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
  public generateProductMockData() {
    const PRODUCT_ARRAY: Product[] = [];

    const randomCategoryID = () => {
      const categoryLength = this.generateCategoryMockData().length;

      const randomIndex = randomIntFromInterval(0, categoryLength - 1);

      return this.generateCategoryMockData()[randomIndex].id;
    };

    for (let index = 0; index < 100; index++) {
      const newProduct = {
        id: uuidv4(),
        name: `Product ${randomStringByCharsetAndLength(
          'alphabetic',
          10,
          false,
        )}`,
        categoryID: randomCategoryID(),
        SKU: randomStringByCharsetAndLength('alphabetic', 6, true),
        classify: `in stock`,
        variants: [],
      };

      PRODUCT_ARRAY.push(newProduct);

      for (let index = 0; index < 3; index++) {
        const newProductVariant = {
          id: uuidv4(),
          name: `${newProduct.name} ${index}`,
          imgSrc:
            'https://www.lenleys.co.uk/wp-content/uploads/2023/04/15501-jpg.webp',
          price: '10000',
          options: [
            {
              id: uuidv4(),
              k: 'Ottoman Storage',
              v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/09/Ottoman-NoText.png',
            },
            {
              id: uuidv4(),
              k: '2+2 Drawers',
              v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/03/4-Drw-NoText-1.png',
            },
            {
              id: uuidv4(),
              k: '2 Drawers',
              v: 'https://www.lenleys.co.uk/wp-content/uploads/2022/09/2-Drw-Side-NoText.png',
            },
          ],
          details: [
            {
              id: uuidv4(),
              title: 'Description',
              contents: [
                {
                  id: uuidv4(),
                  v: [
                    'The Alex Range was created by Swedish designer Dan Ihreborn. Its unique thin, high backrest has a rounded shape that delivers a clean Scandi feel alongside great comfort. The Lumbar cushion gives great lower back support and adds a homely substance to the minimalist design of the Alex.',
                  ],
                },
                {
                  id: uuidv4(),
                  v: ['Available as 2.5 Seater Sofa, Chair & Footstool.'],
                },
                {
                  id: uuidv4(),
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
              id: uuidv4(),
              title: 'Delivery',
              contents: [
                {
                  id: uuidv4(),
                  k: 'Accessories',
                  v: [
                    '£5 for mainland UK delivery. Delivery times can vary depending on suppliers and stock locations, but we will always aim to deliver accessory orders within 7-10 working days where delivery is available. For larger items such pictures and rugs at £15 delivery charge will be applied.',
                  ],
                },
                {
                  id: uuidv4(),
                  k: 'Furniture',
                  v: [
                    'Within Kent and East Sussex we charge a competitive flat rate of £65 as a contribution towards delivery and installation per order. We can also deliver to West Sussex and Surrey and the delivery contribution is £100.',
                  ],
                },
                {
                  id: uuidv4(),
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
  // onModuleInit() is executed before the app bootstraped
  async onModuleInit() {
    try {
      handleSeedData([
        {
          Model: this.userModel,
          data: USER_SEEDER,
        },
        {
          Model: this.categoryModel,
          data: CATEGORY_SEEDER,
        },
        { Model: this.productModel, data: PRODUCT_SEEDER },
        { Model: this.paymentModel, data: PAYMENT_SEEDER },
        { Model: this.addressModel, data: ADDRESS_SEEDER },
      ]);
    } catch (error) {
      throw error;
    }
  }
}
