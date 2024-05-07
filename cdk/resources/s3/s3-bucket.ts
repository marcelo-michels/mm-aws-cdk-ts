import { RemovalPolicy, Tags, aws_s3 } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomStack, Stage } from '../../helpers/custom-stack';

export interface S3BucketProps {
  bucketName: string;
}

export class S3Bucket extends Construct {
  public bucket: aws_s3.Bucket;
  constructor(parent: CustomStack, { bucketName }: S3BucketProps) {
    super(parent, bucketName);
    this.bucket = new aws_s3.Bucket(this, bucketName, {
      bucketName,
      removalPolicy:
        parent.props.stage === Stage.PROD
          ? RemovalPolicy.RETAIN
          : RemovalPolicy.DESTROY,
    });
    Tags.of(this.bucket).add('project', parent.props.projectName);
  }
}
