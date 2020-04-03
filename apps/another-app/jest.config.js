module.exports = {
  name: 'another-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/another-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
