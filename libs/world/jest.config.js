module.exports = {
  name: 'world',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/world',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
