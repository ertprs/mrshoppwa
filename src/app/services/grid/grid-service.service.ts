import { Injectable } from '@angular/core';
import { GridProduct } from '@app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class GridServiceService {

  constructor() { }
  products_1: Array<GridProduct> = [
    { name: 'Bianca Top', costPrice: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/products/1.jpg', 'assets/products/1_1.jpg', 'assets/products/1_2.jpg'], ratingCount: 11, storeRatingCount: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, storeRating: 18090, storeRate: 3, soldBy: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/1.jpg', 'assets/products/1_1.jpg'] }, { image: 'assets/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/1.jpg'] }], storeReviews: [{ image: 'assets/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/1.jpg', 'assets/products/1_1.jpg'] }, { image: 'assets/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyerGuarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarpetta Dress', costPrice: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/products/2.jpg', 'assets/products/2_1.jpg', 'assets/products/2_2.jpg'], ratingCount: 11, storeRatingCount: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, storeRating: 18090, storeRate: 3, soldBy: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/2.jpg'] }], storeReviews: [{ image: 'assets/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/2.jpg', 'assets/products/2_1.jpg'] }, { image: 'assets/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyerGuarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Misty Dress', costPrice: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/products/3.jpg', 'assets/products/3_1.jpg', 'assets/products/3_2.jpg'], ratingCount: 11, storeRatingCount: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, storeRating: 18090, storeRate: 3, soldBy: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/3.jpg'] }], storeReviews: [{ image: 'assets/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/3.jpg', 'assets/products/3_1.jpg'] }, { image: 'assets/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyerGuarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Blanch Dress', costPrice: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/products/4.jpg', 'assets/products/4_1.jpg', 'assets/products/4_2.jpg'], ratingCount: 11, storeRatingCount: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, storeRating: 18090, storeRate: 3, soldBy: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/4.jpg'] }], storeReviews: [{ image: 'assets/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/4.jpg', 'assets/products/4_1.jpg'] }, { image: 'assets/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyerGuarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
    { name: 'Scarlett Dress', costPrice: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/products/5.jpg', 'assets/products/5_1.jpg', 'assets/products/5_2.jpg'], ratingCount: 11, storeRatingCount: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, storeRating: 18090, storeRate: 3, soldBy: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/5.jpg'] }], storeReviews: [{ image: 'assets/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/5.jpg', 'assets/products/5_1.jpg'] }, { image: 'assets/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyerGuarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
  ];
  SQUARE_GRID = [
    { image: 'assets/products/gallery1.jpg' },
    { image: 'assets/products/gallery2.jpg' },
    { image: 'assets/products/gallery3.jpg' },
    { image: 'assets/products/gallery8.jpg' },
    { image: 'assets/products/gallery5.jpg' },
    { image: 'assets/products/gallery1.jpg' },
    { image: 'assets/products/gallery7.jpg' },
    { image: 'assets/products/gallery8.jpg' },
    { image: 'assets/products/gallery1.jpg' },
    { image: 'assets/products/gallery2.jpg' },
    { image: 'assets/products/gallery3.jpg' },
    { image: 'assets/products/gallery8.jpg' },
    { image: 'assets/products/gallery5.jpg' },
    { image: 'assets/products/gallery1.jpg' }
  ]

  medicalList = [
    { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
    { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
    { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
    { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
  ];
  medicalList_2 = [
    {
      content:
        [
          { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    }
  ]
  medicalList_3 = [
    {
      content:
        [
          { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
          { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
          { title: 'Ayurvedic Dabur Chyawanprash 1kg', image: 'assets/products/chyawanprash-700x700.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Amrutanjan Strong Pain balm double power 8ml', image: 'assets/products/amrutanjan.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100mg', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Health Care Product', subTitle: 'OTC Medicine' },
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurved isabgol 100gm', image: 'assets/products/AKIK-PISTI.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    },
    {
      content:
        [
          { title: 'Iodex Strong Pain balm double power 8ml', image: 'assets/products/fastIodexpng.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Baidyanath Ayurveda Neemguard Capsules', image: 'assets/products/neemguard.jpg', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
          { title: 'Eno Fruit Salt lemon flavor Powder 100gm', image: 'assets/products/eno-regular.png', rate: 4.5, regularPrice: 100, salePrice: 80, checked: false, productType: 'Ayurvedic Product', subTitle: 'OTC Medicine' },
        ]
    }
  ];
  accordianLists = [
    {
      Name: 'Beginner',
      children: [
        {
          Name: 'BOAT',
          Set: '3',
          image: 'assets/products/giphy2.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'
        },
        {
          Name: 'PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'BRIDGE VARIATION',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SUPERMAN',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'HALF MOON',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'WHEEL',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SIDE ANGLE',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'CROW',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'REVERSE PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
      ]
    },
    {
      Name: 'Modrate',
      children: [
        {
          Name: 'BOAT',
          Set: '3',
          image: 'assets/products/giphy2.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {
          Name: 'PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'BRIDGE VARIATION',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SUPERMAN',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'HALF MOON',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'WHEEL',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SIDE ANGLE',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'CROW',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'REVERSE PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        }
      ]
    },
    {
      Name: 'Professional',
      children: [
        {
          Name: 'BOAT',
          Set: '3',
          image: 'assets/products/giphy2.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {
          Name: 'PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'BRIDGE VARIATION',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SUPERMAN',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'HALF MOON',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'WHEEL',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'SIDE ANGLE',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'CROW',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        },
        {

          Name: 'REVERSE PLANK',
          Set: '3',
          image: 'assets/products/giphy1.gif',
          Equipment: 'dumbell',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae dignissimos aspernatur ullam maiores odio, dolorem provident vel! Assumenda, tempore sunt quod vero corporis error deserunt velit, ullam quae saepe quas!'

        }
      ]
    },
  ];
  FULL_WIDTH_GRID = [
    { title: 'V I N Y A S A', image: 'assets/products/vinyasa.jpg' },
    { title: 'A S H T A N G A', image: 'assets/products/ashtanga.jpg' },
    { title: 'I Y E N G A R', image: 'assets/products/gallery7.jpg' },
    { title: 'B I K R A M', image: 'assets/products/bikram.jpg' },
    { title: 'J I V A M U K T I', image: 'assets/products/jivamukti.jpg' },
    { title: 'P O W E R', image: 'assets/products/power.jpg' },
    { title: 'S I V A N A N D A', image: 'assets/products/sivananda.jpg' },
    { title: 'Y I N', image: 'assets/products/yin.jpg' },

  ]
  medicines = [
    { title: 'OTC Medicine', image: 'assets/products/icon2.png' },
    { title: 'Drops', image: 'assets/products/drops320x320.png' },
    { title: 'Personal Care', image: 'assets/products/Bath-Essentials-500x500.png' },
    { title: 'Baby & Mother', image: 'assets/products/babyMother.png' },
    { title: 'Health Atd', image: 'assets/products/First-aid.png' },
    { title: 'Baby & Mother', image: 'assets/products/babyMother.png' },
    { title: 'OTC Medicine', image: 'assets/products/icon2.png' },
    { title: 'Drops', image: 'assets/products/drops320x320.png' },
    { title: 'Personal Care', image: 'assets/products/Bath-Essentials-500x500.png' },
    { title: 'Drops', image: 'assets/products/drops320x320.png' },
    { title: 'Baby & Mother', image: 'assets/products/babyMother.png' },
    { title: 'Health Atd', image: 'assets/products/First-aid.png' },
  ]
  buzz = [
    { image: 'assets/products/movie6.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/EiffelTower.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/robot.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAaop4raKafqQKCdhvvmBS3ZJzmZmvL8Sra94OUV-iRaqdnUo', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/movie6.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAaop4raKafqQKCdhvvmBS3ZJzmZmvL8Sra94OUV-iRaqdnUo', title: '7 Places to be in Hyderabad This New Year eve' }
  ];
  buzz1 = [
    { image: 'assets/products/EiffelTower.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/events4.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'https:/encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAaop4raKafqQKCdhvvmBS3ZJzmZmvL8Sra94OUV-iRaqdnUo', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/more5.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/EiffelTower.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/plays4.jpg', title: '7 Places to be in Hyderabad This New Year eve' },
    { image: 'assets/products/robot.jpg', title: '7 Places to be in Hyderabad This New Year eve' }
  ]

  calculate(price, discount) {
    // eslint-disable-next-line no-param-reassign
    price -= price * discount / 100;
    return price.toFixed(2);
  }
}
