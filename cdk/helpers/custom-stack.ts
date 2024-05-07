import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export enum Stage {
  PROD = 'prod',
  HOMOLOG = 'homolog',
  DEV = 'dev',
}

export type CustomStackProps = StackProps & {
  stage: Stage;
  projectName: string;
};

export class CustomStack extends Stack {
  constructor(
    protected scope: Construct,
    public id: string,
    public props: CustomStackProps,
  ) {
    super(scope, id, props);
  }
}
