# sam-app

For serverless deployment

1) Do aws configure

You need to create s3 bucket which holds the handler code.

2) sam init
3) sam build 
4) sam deploy --stack-name testStackRohit12 --s3-bucket teststackrohit12 --region ap-south-1 --capabilities CAPABILITY_IAM
4) To test locally use 
