# Find-My-IP-Address
[Link to Website](https://azr11.com/)

![57297](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/08bb55f1-e5d1-4aa3-92a8-018b9aa25c68)

---
## Description
### Purpose
The project's primary objective was to create a static website hosted on AWS, offering a seamless user experience. It allows users to input their name and receive a personalised message by clicking the submit button. The custom message is generated using both the user-provided name and their IP address which is retrieved in real-time via a REST API.

### Technologies
#### Website
I structured the web pages using HTML to define the content and layout. For the user interface, I integrated various elements, including text, an input field allowing users to input their names, a submission button, and a dedicated space to exhibit the output message. CSS was used to enhance the visual style of the webpage. JavaScript played a central role in managing user input, processing it when the submit button was clicked, and generating the intended output through the utilisation of a REST API. Additionally, it was used to implement a typewriter effect for the displayed output. 

#### AWS
My goal was to automate the deployment process as much as possible. To achieve this, I harnessed the power of AWS CloudFormation as an Infrastructure as Code (IAC) method. Using a YAML template, I defined the entire infrastructure.

I chose Amazon S3 as the hosting platform for the static website due to its suitability for this purpose. To enhance the website's performance, I implemented Amazon CloudFront as a content delivery network (CDN), leveraging its edge locations to reduce latency and optimize load times.

Within this CloudFormation stack, I created the S3 bucket, configuring it to facilitate static site hosting. Additionally, I attached a GetObject policy to the S3 bucket for proper access control. The stack also included the setup of a CloudFront distribution, ensuring that content was served securely. I integrated an SSL certificate and a Route 53 hosted zone to manage DNS. To provide a seamless user experience, I added domain records within the hosted zone, pointing them to the CloudFront distribution. This distribution was configured to utilize the SSL certificate and the custom domain names as aliases.

### Features to implement in the future
Looking ahead, I'd like to further streamline the deployment process by eliminating the need for manual uploads of website files into the designated S3 bucket.

---
## AWS Architecture
![1699309389178-1920dab1-9d03-4ea7-b845-34f8e5a52014_1](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/679efe1e-22f8-45fd-a9a2-cc9073bc0816)

---
## Deployment 

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/c01c39bd-1dd5-486b-8bee-aa77a026243d)








