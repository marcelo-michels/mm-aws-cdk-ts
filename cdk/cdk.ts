import { App } from 'aws-cdk-lib';
import { Stage } from './helpers/custom-stack';
import { ExampleCdkStack } from './stacks/example-stack';

const stage = (process.env.STAGE_NAME as Stage) || Stage.DEV;

const app = new App();

new ExampleCdkStack(app, 'ExampleCdkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stage,
  projectName: 'example-cdk',
});
