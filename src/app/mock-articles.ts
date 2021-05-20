import { Article } from './article';

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'My first Article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis facilisis erat nec tincidunt. Donec a iaculis purus. Phasellus eu volutpat lectus. Nunc aliquam mi sed orci vulputate, sit amet dignissim nisi ultricies. Cras lobortis dapibus lectus sit amet rutrum. Praesent non finibus nisl. Nunc condimentum felis nec lectus efficitur, vitae ultrices ligula eleifend. Morbi et justo ut urna consectetur molestie id id quam. Suspendisse feugiat eros vel justo sodales, et maximus libero congue.<p> Suspendisse dapibus tempor tortor a consequat.        Morbi viverra sodales dolor ac rhoncus. Nullam vitae suscipit tellus. Integer risus metus, pulvinar a feugiat in, sodales a magna. Mauris scelerisque lorem lacus, eu ultricies purus posuere et. Aliquam gravida finibus vulputate. Phasellus ligula neque, feugiat et eros in, varius suscipit massa. Praesent tellus ipsum, blandit in condimentum ut, porttitor at erat. Vestibulum in molestie sem. Nam nunc nulla, sodales in felis ut, feugiat commodo nulla. In in augue eu justo tempus convallis. Nunc vestibulum nibh sed ultricies rhoncus. Vivamus consectetur, nulla vel sagittis semper, mauris sem sollicitudin leo, vitae bibendum lacus erat ac ex.</p>',
    description: "This is my First article! It's great. Please read it. :)",
    key: 'my-first-article',
    date: new Date(),
    ImageURL: '../assets/Hexode1.png',
  },
  {
    id: 2,
    title: 'My second Article',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis facilisis erat nec tincidunt. Donec a iaculis purus. Phasellus eu volutpat lectus. Nunc aliquam mi sed orci vulputate, sit amet dignissim nisi ultricies. Cras lobortis dapibus lectus sit amet rutrum. Praesent non finibus nisl. Nunc condimentum felis nec lectus efficitur, vitae ultrices ligula eleifend. Morbi et justo ut urna consectetur molestie id id quam. Suspendisse feugiat eros vel justo sodales, et maximus libero congue.<p> Suspendisse dapibus tempor tortor a consequat. Morbi viverra sodales dolor ac rhoncus. Nullam vitae suscipit tellus. Integer risus metus, pulvinar a feugiat in, sodales a magna. Mauris scelerisque lorem lacus, eu ultricies purus posuere et. Aliquam gravida finibus vulputate. Phasellus ligula neque, feugiat et eros in, varius suscipit massa. Praesent tellus ipsum, blandit in condimentum ut, porttitor at erat. Vestibulum in molestie sem. Nam nunc nulla, sodales in felis ut, feugiat commodo nulla. In in augue eu justo tempus convallis. Nunc vestibulum nibh sed ultricies rhoncus. Vivamus consectetur, nulla vel sagittis semper, mauris sem sollicitudin leo, vitae bibendum lacus erat ac ex.</p>',
    description: "This is my Second article! It's great. Please read it. :)",
    key: 'my-second-article',
    date: new Date(),
    ImageURL: '../assets/Hexode1.png',
  },
];
