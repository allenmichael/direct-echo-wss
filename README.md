```sh
sam build

sam package --template-file ./.aws-sam/build/template.yaml --s3-bucket <YOUR-S3-BUCKET> --output-template ./.aws-sam/build/output.yaml

sam deploy --template-file ./.aws-sam/build/output.yaml --stack-name echo-wss --capabilities CAPABILITY_IAM --parameter-overrides EnvironmentAPIGatewayStageName=v1 StackTagName=AMSXBG EnvironmentTagName=AMSXBG

aws cloudformation describe-stacks --stack-name echo-wss --query Stacks[].Outputs[].[OutputKey,OutputValue]
```