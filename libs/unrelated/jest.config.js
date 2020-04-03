module.exports = {
  name: 'unrelated',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/unrelated',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
