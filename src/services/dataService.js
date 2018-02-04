import AWS from 'aws-sdk'

AWS.config.region = 'ap-northeast-2'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-2:4edd3fa1-e50b-4e8c-aa91-55ed1c056f10'
})
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'})

export default {
  findDevLogs () {
    return new Promise((resolve, reject) => {
      dynamodb.scan({
        TableName: 'dev-logs'
      }, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  }
}
