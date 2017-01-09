'use strict';

const skills = require('../data/skills').all;
const {
  android,
  api,
  asp,
  backbone,
  distributedsys,
  ebs,
  elasticsearch,
  imageprocessing,
  ios,
  js,
  lambda,
  less,
  mariadb,
  math,
  mongodb,
  mssql,
  neuronalnetwork,
  node,
  nodejs,
  numeric,
  parallelexec,
  php,
  psql,
  rails,
  rds,
  react,
  redis,
  rspec,
  sass,
  stylus,
  svg,
} = skills;

module.exports = [
  {
    type: 'job',
    company: 'shyftplan GmbH',
    startsAt: '01.12.2016',
    endsAt: null,
    position: [
      'Head of Code',
      'Head of Mobile Developement',
    ],
    skills: {
      lambda,
      ebs,
      rds,
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      rspec,
      redis,
    },
  },
  {
    type: 'job',
    company: 'shyftplan GmbH',
    startsAt: '01.08.2015',
    endsAt: '30.11.2016',
    position: [
      'Head of Mobile Developement',
      'Backend Developer',
    ],
    skills: {
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      rspec,
      redis,
    },
  },
  {
    type: 'job',
    company: 'shyftplan GmbH',
    startsAt: '01.02.2015',
    endsAt: '30.07.2015',
    position: [ 'Backend Developer' ],
    skills: {
      rails,
      psql,
      rspec,
      redis,
      elasticsearch,
    },
  },
  {
    type: 'job',
    company: 'shyftplan GmbH',
    startsAt: '01.12.2014',
    endsAt: '31.01.2015',
    remote: true,
    position: [ 'Backend Developer' ],
    skills: {
      rails,
      psql,
      rspec,
      redis,
      elasticsearch,
    },
  },
  {
    type: 'job',
    company: 'Nutanix',
    startsAt: '01.11.2014',
    endsAt: '31.01.2015',
    remote: true,
    position: [ 'Frontend Developer' ],
    skills: {
      nodejs,
      less,
      backbone,
    },
  },
  {
    type: 'job',
    company: 'Nutanix',
    startsAt: '01.08.2014',
    endsAt: '31.10.2014',
    remote: true,
    position: [ 'Frontend Developer' ],
    skills: {
      php,
      js,
      less,
      svg,
    },
  },
  {
    type: 'job',
    company: 'Volkswagen AG',
    startsAt: '01.02.2014',
    endsAt: '31.01.2015',
    position: [ 'Developer (Research - NDA)' ],
    skills: {
      node,
      mongodb,
      imageprocessing,
    },
  },
  {
    type: 'job',
    company: 'Novotrand GmbH',
    startsAt: '01.04.2010',
    endsAt: '31.12.2013',
    position: [
      'Head of Code',
      'Software Architect',
    ],
    skills: {
      asp,
      node,
      mssql,
    },
  },
  {
    type: 'study',
    university: 'Philipps-Universität Marburg',
    startsAt: '2004',
    endsAt: '2015',
    graduiation: [ 'Intermediate diploma' ],
    skills: {
      imageprocessing,
      numeric,
      math,
      parallelexec,
      neuronalnetwork,
      distributedsys,
    },
  },
  {
    type: 'job',
    company: 'Freelancer',
    startsAt: '2002',
    endsAt: '2013',
    position: [ 'Full Stack Developer' ],
    skills: {
      node,
      rails,
      react,
      php,
      mongodb,
      psql,
      mariadb,
      stylus,
      less,
      sass,
      svg,
    },
  },
];
