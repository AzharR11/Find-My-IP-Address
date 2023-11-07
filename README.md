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
* The first step is to create a CloudFormation stack utilising the created YAML template.
  
  
![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/c01c39bd-1dd5-486b-8bee-aa77a026243d)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/4b4ad059-81bc-4b2c-8079-a42c8439406a)


* The name of the bucket can be configured at the time of stack creation, this was made possible because of the parameters section added in the YAML template.

  
![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/a13f1330-b96c-4729-8767-a94548efd94c)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/a6b0a7cf-9744-4f16-b30b-fe0cb54f8353)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/bb7e414f-9b58-4e5b-98b7-2fed5618a77e)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/c84d7e92-a320-4767-9b2c-0bd58face1f6)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/c89f1960-004a-470c-9b72-5db51cdbb598)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/23a0c8b3-5365-434b-ab54-d6260033bd41)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/a8aa481b-043a-4689-ba60-e6c67e69cfae)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/957bf62b-2465-4f18-8f6d-1993cf684321)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/15cafca5-4c6a-47f8-a449-055083010ef9)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/3595689f-8051-4fa2-a545-5c5b8ce4eddd)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/b53214c7-7a70-49ef-9c66-b2f404f95b6e)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/f459ba78-3c87-4b7e-8b61-4a131750f0ce)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/81193d59-d6de-4d73-abce-c6ffa832ea0f)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/b9bf3a1e-80ac-4cb6-b847-d6090d3545ae)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/e0e18ddf-2f1a-4516-9314-1f2bbec37005)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/2fa049dc-bb1d-4eac-8623-5e51b2884540)

![image](https://github.com/AzharR11/Find-My-IP-Address/assets/51958831/f8c9a7ba-c02a-44c1-8d86-45146eaae78d)



