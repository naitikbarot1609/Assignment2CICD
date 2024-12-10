#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Cicd2NewStack } from '../lib/cicd2_new-stack';

const app = new cdk.App();
new Cicd2NewStack(app, 'Cicd2NewStack', {
  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});