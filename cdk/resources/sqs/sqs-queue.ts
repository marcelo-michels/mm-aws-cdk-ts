import { RemovalPolicy, Tags, aws_sqs } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomStack, Stage } from '../../helpers/custom-stack';

export interface SqsQueueProps {
  queueName: string;
}

export class SqsQueue extends Construct {
  public queue: aws_sqs.Queue;
  constructor(parent: CustomStack, { queueName }: SqsQueueProps) {
    super(parent, queueName);
    this.queue = new aws_sqs.Queue(this, queueName, {
      queueName,
      removalPolicy:
        parent.props.stage === Stage.PROD
          ? RemovalPolicy.RETAIN
          : RemovalPolicy.DESTROY,
    });
    Tags.of(this.queue).add('project', parent.props.projectName);
  }
}
