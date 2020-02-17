import * as $ from 'jquery';
import Post from "@models/post";
import('./styles.css');
import json from '@/assets/json';
import Webpacklogo from '@/assets/webpack-logo.png';
import('@/babel');
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';
import('@/less.less');
import('@/scss.scss');

const post = new Post('Webpack post title', Webpacklogo);

$('pre').html(post.toString());

// console.log('Post to string: ', post.toString());

// console.log('JSON: ', json);
// console.log('XML: ', xml);
// console.log('CSV: ', csv);

