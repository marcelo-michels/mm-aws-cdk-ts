import { Construct } from 'constructs';
import { CustomStack, CustomStackProps } from '../helpers/custom-stack';
import { S3Bucket } from '../resources/s3/s3-bucket';

export class ExampleCdkStack extends CustomStack {
  constructor(
    protected scope: Construct,
    public id: string,
    public props: CustomStackProps,
  ) {
    super(scope, id, props);

    new S3Bucket(this, {
      bucketName: 'mm-aws-cdk-ts-example-bucket-1',
    });
  }
}
