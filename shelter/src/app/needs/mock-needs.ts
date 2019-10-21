import { Need } from './need';

export const Needs: Need[] = [
  {
    city: 'Dnipro',
    orphanageId: 1,
    charityMakerID: 2,
    donationItemID: 1,
    pathToAvatar: '',
    status: 'Sended',
    lastDateWhenStatusChanged: '2019-10-15T12:18',
    itemName: 'Тапки',
    itemDescription: 'Тапки 40го размера'
  },
  {
    city: 'Kyiv',
    orphanageId: 7,
    charityMakerID: 2,
    donationItemID: 2,
    // "orphanageAvatar": null,
    pathToAvatar: '',
    status: 'Complited',
    lastDateWhenStatusChanged: '2019-10-14T12:18',
    itemName: 'Игрушки',
    itemDescription: 'Кубики'
  },
  {
    city: 'Lviv',
    orphanageId: 3,
    charityMakerID: 2,
    donationItemID: 3,
    // orphanageAvatar: null,
    pathToAvatar: '',
    status: 'Sended',
    lastDateWhenStatusChanged: '2019-10-13T12:18',
    itemName: 'Книги',
    itemDescription: 'Сказки'
  }
];