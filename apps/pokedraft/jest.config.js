module.exports = {
  name: 'pokedraft',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/pokedraft',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
