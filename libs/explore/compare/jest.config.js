module.exports = {
  name: 'explore-compare',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/explore/compare',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
