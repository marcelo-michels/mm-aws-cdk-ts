import { Tags, aws_apprunner } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomStack } from '../../helpers/custom-stack';

export interface AppRunnerServiceProps {
  serviceName: string;
  imageRepositoryType: 'ECR_PUBLIC' | 'ECR';
  imageIdentifier: string;
}

export class AppRunnerService extends Construct {
  public service: aws_apprunner.CfnService;
  constructor(
    parent: CustomStack,
    {
      serviceName,
      imageIdentifier,
      imageRepositoryType,
    }: AppRunnerServiceProps,
  ) {
    super(parent, serviceName);
    this.service = new aws_apprunner.CfnService(this, serviceName, {
      serviceName,
      sourceConfiguration: {
        autoDeploymentsEnabled: false,
        imageRepository: {
          imageRepositoryType,
          imageIdentifier,
        },
      },
      instanceConfiguration: {
        cpu: '0.25 vCPU',
        memory: '0.5 GB',
      },
    });
    Tags.of(this.service).add('project', parent.props.projectName);
  }
}
