---
title: WebAPI v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="webapi">WebAPI v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Authentication

- HTTP Authentication, scheme: Bearer JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer YOUR_TOKEN". 

`Enter your token in the text input below.`

<h1 id="webapi-adminprofiles">AdminProfiles</h1>

## post__api_AdminProfiles

> Code samples

```shell
# You can also use wget
curl -X POST /api/AdminProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/AdminProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/AdminProfiles',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/AdminProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/AdminProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/AdminProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/AdminProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/AdminProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/AdminProfiles`

> Body parameter

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_adminprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateAdminProfileCommand](#schemacreateadminprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_adminprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedAdminProfileResponse](#schemacreatedadminprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_AdminProfiles

> Code samples

```shell
# You can also use wget
curl -X PUT /api/AdminProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/AdminProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/AdminProfiles',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/AdminProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/AdminProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/AdminProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/AdminProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/AdminProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/AdminProfiles`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_adminprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateAdminProfileCommand](#schemaupdateadminprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_adminprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedAdminProfileResponse](#schemaupdatedadminprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_AdminProfiles

> Code samples

```shell
# You can also use wget
curl -X GET /api/AdminProfiles \
  -H 'Accept: text/plain'

```

```http
GET /api/AdminProfiles HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/AdminProfiles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/AdminProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/AdminProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/AdminProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/AdminProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/AdminProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/AdminProfiles`

<h3 id="get__api_adminprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}
```

<h3 id="get__api_adminprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListAdminProfileListItemDtoGetListResponse](#schemagetlistadminprofilelistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_AdminProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/AdminProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/AdminProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/AdminProfiles/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/AdminProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/AdminProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/AdminProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/AdminProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/AdminProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/AdminProfiles/{id}`

<h3 id="delete__api_adminprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_adminprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedAdminProfileResponse](#schemadeletedadminprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_AdminProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/AdminProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/AdminProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/AdminProfiles/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/AdminProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/AdminProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/AdminProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/AdminProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/AdminProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/AdminProfiles/{id}`

<h3 id="get__api_adminprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="get__api_adminprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdAdminProfileResponse](#schemagetbyidadminprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-auth">Auth</h1>

## post__api_Auth_Login

> Code samples

```shell
# You can also use wget
curl -X POST /api/Auth/Login \
  -H 'Content-Type: application/json'

```

```http
POST /api/Auth/Login HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "email": "string",
  "password": "string",
  "authenticatorCode": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/Login',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Auth/Login',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Auth/Login', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Auth/Login', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/Login");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Auth/Login", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Auth/Login`

> Body parameter

```json
{
  "email": "string",
  "password": "string",
  "authenticatorCode": "string"
}
```

<h3 id="post__api_auth_login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserForLoginDto](#schemauserforlogindto)|false|none|

<h3 id="post__api_auth_login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_Auth_Register

> Code samples

```shell
# You can also use wget
curl -X POST /api/Auth/Register \
  -H 'Content-Type: application/json'

```

```http
POST /api/Auth/Register HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/Register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Auth/Register',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Auth/Register', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Auth/Register', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/Register");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Auth/Register", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Auth/Register`

> Body parameter

```json
{
  "email": "string",
  "password": "string"
}
```

<h3 id="post__api_auth_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserForRegisterDto](#schemauserforregisterdto)|false|none|

<h3 id="post__api_auth_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Auth_RefreshToken

> Code samples

```shell
# You can also use wget
curl -X GET /api/Auth/RefreshToken

```

```http
GET /api/Auth/RefreshToken HTTP/1.1

```

```javascript

fetch('/api/Auth/RefreshToken',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Auth/RefreshToken',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Auth/RefreshToken')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Auth/RefreshToken', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/RefreshToken");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Auth/RefreshToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Auth/RefreshToken`

<h3 id="get__api_auth_refreshtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_Auth_RevokeToken

> Code samples

```shell
# You can also use wget
curl -X PUT /api/Auth/RevokeToken \
  -H 'Content-Type: application/json'

```

```http
PUT /api/Auth/RevokeToken HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/RevokeToken',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/api/Auth/RevokeToken',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/Auth/RevokeToken', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/Auth/RevokeToken', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/RevokeToken");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/Auth/RevokeToken", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/Auth/RevokeToken`

> Body parameter

```json
"string"
```

<h3 id="put__api_auth_revoketoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="put__api_auth_revoketoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Auth_EnableEmailAuthenticator

> Code samples

```shell
# You can also use wget
curl -X GET /api/Auth/EnableEmailAuthenticator

```

```http
GET /api/Auth/EnableEmailAuthenticator HTTP/1.1

```

```javascript

fetch('/api/Auth/EnableEmailAuthenticator',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Auth/EnableEmailAuthenticator',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Auth/EnableEmailAuthenticator')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Auth/EnableEmailAuthenticator', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/EnableEmailAuthenticator");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Auth/EnableEmailAuthenticator", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Auth/EnableEmailAuthenticator`

<h3 id="get__api_auth_enableemailauthenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Auth_EnableOtpAuthenticator

> Code samples

```shell
# You can also use wget
curl -X GET /api/Auth/EnableOtpAuthenticator

```

```http
GET /api/Auth/EnableOtpAuthenticator HTTP/1.1

```

```javascript

fetch('/api/Auth/EnableOtpAuthenticator',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Auth/EnableOtpAuthenticator',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Auth/EnableOtpAuthenticator')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Auth/EnableOtpAuthenticator', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/EnableOtpAuthenticator");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Auth/EnableOtpAuthenticator", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Auth/EnableOtpAuthenticator`

<h3 id="get__api_auth_enableotpauthenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Auth_VerifyEmailAuthenticator

> Code samples

```shell
# You can also use wget
curl -X GET /api/Auth/VerifyEmailAuthenticator

```

```http
GET /api/Auth/VerifyEmailAuthenticator HTTP/1.1

```

```javascript

fetch('/api/Auth/VerifyEmailAuthenticator',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Auth/VerifyEmailAuthenticator',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Auth/VerifyEmailAuthenticator')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Auth/VerifyEmailAuthenticator', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/VerifyEmailAuthenticator");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Auth/VerifyEmailAuthenticator", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Auth/VerifyEmailAuthenticator`

<h3 id="get__api_auth_verifyemailauthenticator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ActivationKey|query|string|false|none|

<h3 id="get__api_auth_verifyemailauthenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_Auth_VerifyOtpAuthenticator

> Code samples

```shell
# You can also use wget
curl -X POST /api/Auth/VerifyOtpAuthenticator \
  -H 'Content-Type: application/json'

```

```http
POST /api/Auth/VerifyOtpAuthenticator HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = 'string';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/VerifyOtpAuthenticator',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Auth/VerifyOtpAuthenticator',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Auth/VerifyOtpAuthenticator', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Auth/VerifyOtpAuthenticator', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/VerifyOtpAuthenticator");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Auth/VerifyOtpAuthenticator", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Auth/VerifyOtpAuthenticator`

> Body parameter

```json
"string"
```

<h3 id="post__api_auth_verifyotpauthenticator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|string|false|none|

<h3 id="post__api_auth_verifyotpauthenticator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_Auth_ForgotPassword

> Code samples

```shell
# You can also use wget
curl -X POST /api/Auth/ForgotPassword \
  -H 'Content-Type: application/json'

```

```http
POST /api/Auth/ForgotPassword HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "email": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/ForgotPassword',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Auth/ForgotPassword',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Auth/ForgotPassword', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Auth/ForgotPassword', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/ForgotPassword");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Auth/ForgotPassword", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Auth/ForgotPassword`

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="post__api_auth_forgotpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ForgotPasswordDto](#schemaforgotpassworddto)|false|none|

<h3 id="post__api_auth_forgotpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_Auth_ResetPassword

> Code samples

```shell
# You can also use wget
curl -X POST /api/Auth/ResetPassword \
  -H 'Content-Type: application/json'

```

```http
POST /api/Auth/ResetPassword HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Auth/ResetPassword',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Auth/ResetPassword',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Auth/ResetPassword', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Auth/ResetPassword', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Auth/ResetPassword");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Auth/ResetPassword", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Auth/ResetPassword`

> Body parameter

```json
{
  "password": "string"
}
```

<h3 id="post__api_auth_resetpassword-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|query|string(uuid)|false|none|
|body|body|[ResetPasswordDto](#schemaresetpassworddto)|false|none|

<h3 id="post__api_auth_resetpassword-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-classrooms">Classrooms</h1>

## post__api_Classrooms

> Code samples

```shell
# You can also use wget
curl -X POST /api/Classrooms \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/Classrooms HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/Classrooms',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/Classrooms',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/Classrooms', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Classrooms', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Classrooms");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Classrooms", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Classrooms`

> Body parameter

```json
{
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_classrooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateClassroomCommand](#schemacreateclassroomcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","grade":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_classrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedClassroomResponse](#schemacreatedclassroomresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_Classrooms

> Code samples

```shell
# You can also use wget
curl -X PUT /api/Classrooms \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/Classrooms HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/Classrooms',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/Classrooms',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/Classrooms', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/Classrooms', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Classrooms");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/Classrooms", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/Classrooms`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_classrooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateClassroomCommand](#schemaupdateclassroomcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","grade":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_classrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedClassroomResponse](#schemaupdatedclassroomresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Classrooms

> Code samples

```shell
# You can also use wget
curl -X GET /api/Classrooms \
  -H 'Accept: text/plain'

```

```http
GET /api/Classrooms HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Classrooms',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/Classrooms',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/Classrooms', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Classrooms', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Classrooms");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Classrooms", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Classrooms`

<h3 id="get__api_classrooms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","grade":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "grade": "string",
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}
```

<h3 id="get__api_classrooms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListClassroomListItemDtoGetListResponse](#schemagetlistclassroomlistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_Classrooms_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/Classrooms/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/Classrooms/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Classrooms/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/Classrooms/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/Classrooms/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/Classrooms/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Classrooms/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/Classrooms/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/Classrooms/{id}`

<h3 id="delete__api_classrooms_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_classrooms_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedClassroomResponse](#schemadeletedclassroomresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Classrooms_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/Classrooms/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/Classrooms/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Classrooms/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/Classrooms/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/Classrooms/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Classrooms/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Classrooms/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Classrooms/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Classrooms/{id}`

<h3 id="get__api_classrooms_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","grade":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="get__api_classrooms_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdClassroomResponse](#schemagetbyidclassroomresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-operationclaims">OperationClaims</h1>

## get__api_OperationClaims_{Id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/OperationClaims/{Id}

```

```http
GET /api/OperationClaims/{Id} HTTP/1.1

```

```javascript

fetch('/api/OperationClaims/{Id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/OperationClaims/{Id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/OperationClaims/{Id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/OperationClaims/{Id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/OperationClaims/{Id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/OperationClaims/{Id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/OperationClaims/{Id}`

<h3 id="get__api_operationclaims_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|integer(int32)|true|none|

<h3 id="get__api_operationclaims_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_OperationClaims

> Code samples

```shell
# You can also use wget
curl -X GET /api/OperationClaims

```

```http
GET /api/OperationClaims HTTP/1.1

```

```javascript

fetch('/api/OperationClaims',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/OperationClaims',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/OperationClaims')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/OperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/OperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/OperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/OperationClaims`

<h3 id="get__api_operationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

<h3 id="get__api_operationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_OperationClaims

> Code samples

```shell
# You can also use wget
curl -X POST /api/OperationClaims \
  -H 'Content-Type: application/json'

```

```http
POST /api/OperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/OperationClaims',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/OperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/OperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/OperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/OperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/OperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/OperationClaims`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="post__api_operationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateOperationClaimCommand](#schemacreateoperationclaimcommand)|false|none|

<h3 id="post__api_operationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_OperationClaims

> Code samples

```shell
# You can also use wget
curl -X PUT /api/OperationClaims \
  -H 'Content-Type: application/json'

```

```http
PUT /api/OperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": 0,
  "name": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/OperationClaims',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/api/OperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/OperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/OperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/OperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/OperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/OperationClaims`

> Body parameter

```json
{
  "id": 0,
  "name": "string"
}
```

<h3 id="put__api_operationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateOperationClaimCommand](#schemaupdateoperationclaimcommand)|false|none|

<h3 id="put__api_operationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_OperationClaims

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/OperationClaims \
  -H 'Content-Type: application/json'

```

```http
DELETE /api/OperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/OperationClaims',
{
  method: 'DELETE',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.delete '/api/OperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.delete('/api/OperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/OperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/OperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/OperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/OperationClaims`

> Body parameter

```json
{
  "id": 0
}
```

<h3 id="delete__api_operationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteOperationClaimCommand](#schemadeleteoperationclaimcommand)|false|none|

<h3 id="delete__api_operationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-parentprofiles">ParentProfiles</h1>

## post__api_ParentProfiles

> Code samples

```shell
# You can also use wget
curl -X POST /api/ParentProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/ParentProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/ParentProfiles',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/ParentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/ParentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/ParentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/ParentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/ParentProfiles`

> Body parameter

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_parentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateParentProfileCommand](#schemacreateparentprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_parentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedParentProfileResponse](#schemacreatedparentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_ParentProfiles

> Code samples

```shell
# You can also use wget
curl -X PUT /api/ParentProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/ParentProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/ParentProfiles',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/ParentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/ParentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/ParentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/ParentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/ParentProfiles`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_parentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateParentProfileCommand](#schemaupdateparentprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_parentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedParentProfileResponse](#schemaupdatedparentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_ParentProfiles

> Code samples

```shell
# You can also use wget
curl -X GET /api/ParentProfiles \
  -H 'Accept: text/plain'

```

```http
GET /api/ParentProfiles HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentProfiles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/ParentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/ParentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/ParentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/ParentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/ParentProfiles`

<h3 id="get__api_parentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}
```

<h3 id="get__api_parentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListParentProfileListItemDtoGetListResponse](#schemagetlistparentprofilelistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_ParentProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/ParentProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/ParentProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentProfiles/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/ParentProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/ParentProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/ParentProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/ParentProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/ParentProfiles/{id}`

<h3 id="delete__api_parentprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_parentprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedParentProfileResponse](#schemadeletedparentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_ParentProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/ParentProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/ParentProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentProfiles/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/ParentProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/ParentProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/ParentProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/ParentProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/ParentProfiles/{id}`

<h3 id="get__api_parentprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="get__api_parentprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdParentProfileResponse](#schemagetbyidparentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-parentstudentlinks">ParentStudentLinks</h1>

## post__api_ParentStudentLinks

> Code samples

```shell
# You can also use wget
curl -X POST /api/ParentStudentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/ParentStudentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/ParentStudentLinks',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/ParentStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/ParentStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/ParentStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/ParentStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/ParentStudentLinks`

> Body parameter

```json
{
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_parentstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateParentStudentLinkCommand](#schemacreateparentstudentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","relationship":0,"isPrimary":true,"tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_parentstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedParentStudentLinkResponse](#schemacreatedparentstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_ParentStudentLinks

> Code samples

```shell
# You can also use wget
curl -X PUT /api/ParentStudentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/ParentStudentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/ParentStudentLinks',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/ParentStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/ParentStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/ParentStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/ParentStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/ParentStudentLinks`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_parentstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateParentStudentLinkCommand](#schemaupdateparentstudentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","relationship":0,"isPrimary":true,"tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_parentstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedParentStudentLinkResponse](#schemaupdatedparentstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_ParentStudentLinks

> Code samples

```shell
# You can also use wget
curl -X GET /api/ParentStudentLinks \
  -H 'Accept: text/plain'

```

```http
GET /api/ParentStudentLinks HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentStudentLinks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/ParentStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/ParentStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/ParentStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/ParentStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/ParentStudentLinks`

<h3 id="get__api_parentstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","relationship":0,"isPrimary":true,"tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
      "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
      "relationship": 0,
      "isPrimary": true,
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}
```

<h3 id="get__api_parentstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListParentStudentLinkListItemDtoGetListResponse](#schemagetlistparentstudentlinklistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_ParentStudentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/ParentStudentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/ParentStudentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentStudentLinks/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/ParentStudentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/ParentStudentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/ParentStudentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentStudentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/ParentStudentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/ParentStudentLinks/{id}`

<h3 id="delete__api_parentstudentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_parentstudentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedParentStudentLinkResponse](#schemadeletedparentstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_ParentStudentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/ParentStudentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/ParentStudentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/ParentStudentLinks/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/ParentStudentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/ParentStudentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/ParentStudentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/ParentStudentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/ParentStudentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/ParentStudentLinks/{id}`

<h3 id="get__api_parentstudentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","relationship":0,"isPrimary":true,"tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="get__api_parentstudentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdParentStudentLinkResponse](#schemagetbyidparentstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-schools">Schools</h1>

## post__api_Schools

> Code samples

```shell
# You can also use wget
curl -X POST /api/Schools \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/Schools HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/Schools',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/Schools',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/Schools', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Schools', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Schools");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Schools", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Schools`

> Body parameter

```json
{
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_schools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSchoolCommand](#schemacreateschoolcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","type":0,"city":"string","district":"string","country":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","phone":"string","email":"string","websiteUrl":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_schools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedSchoolResponse](#schemacreatedschoolresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_Schools

> Code samples

```shell
# You can also use wget
curl -X PUT /api/Schools \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/Schools HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/Schools',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/Schools',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/Schools', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/Schools', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Schools");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/Schools", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/Schools`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_schools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateSchoolCommand](#schemaupdateschoolcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","type":0,"city":"string","district":"string","country":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","phone":"string","email":"string","websiteUrl":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_schools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedSchoolResponse](#schemaupdatedschoolresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Schools

> Code samples

```shell
# You can also use wget
curl -X GET /api/Schools \
  -H 'Accept: text/plain'

```

```http
GET /api/Schools HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Schools',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/Schools',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/Schools', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Schools', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Schools");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Schools", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Schools`

<h3 id="get__api_schools-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","type":0,"city":"string","district":"string","country":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","phone":"string","email":"string","websiteUrl":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": 0,
      "city": "string",
      "district": "string",
      "country": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "phone": "string",
      "email": "string",
      "websiteUrl": "string",
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}
```

<h3 id="get__api_schools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListSchoolListItemDtoGetListResponse](#schemagetlistschoollistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_Schools_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/Schools/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/Schools/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Schools/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/Schools/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/Schools/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/Schools/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Schools/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/Schools/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/Schools/{id}`

<h3 id="delete__api_schools_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_schools_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedSchoolResponse](#schemadeletedschoolresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Schools_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/Schools/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/Schools/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/Schools/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/Schools/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/Schools/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Schools/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Schools/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Schools/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Schools/{id}`

<h3 id="get__api_schools_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","name":"string","type":0,"city":"string","district":"string","country":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","phone":"string","email":"string","websiteUrl":"string","notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="get__api_schools_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdSchoolResponse](#schemagetbyidschoolresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-studentprofiles">StudentProfiles</h1>

## post__api_StudentProfiles

> Code samples

```shell
# You can also use wget
curl -X POST /api/StudentProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/StudentProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/StudentProfiles',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/StudentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/StudentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/StudentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/StudentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/StudentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/StudentProfiles`

> Body parameter

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_studentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateStudentProfileCommand](#schemacreatestudentprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","schoolNumber":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","gradeLevel":0,"enrollmentDate":"2019-08-24T14:15:22Z","isArchived":true,"level":0,"xp":0,"totalPoints":0,"badgesJson":"string","streakDays":0,"lastActivityAt":"2019-08-24T14:15:22Z","completedTaskCount":0,"averageScore":0.1,"lastCourseAccessAt":"2019-08-24T14:15:22Z","tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_studentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedStudentProfileResponse](#schemacreatedstudentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_StudentProfiles

> Code samples

```shell
# You can also use wget
curl -X PUT /api/StudentProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/StudentProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/StudentProfiles',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/StudentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/StudentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/StudentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/StudentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/StudentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/StudentProfiles`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_studentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateStudentProfileCommand](#schemaupdatestudentprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","schoolNumber":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","gradeLevel":0,"enrollmentDate":"2019-08-24T14:15:22Z","isArchived":true,"level":0,"xp":0,"totalPoints":0,"badgesJson":"string","streakDays":0,"lastActivityAt":"2019-08-24T14:15:22Z","completedTaskCount":0,"averageScore":0.1,"lastCourseAccessAt":"2019-08-24T14:15:22Z","tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_studentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedStudentProfileResponse](#schemaupdatedstudentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_StudentProfiles

> Code samples

```shell
# You can also use wget
curl -X GET /api/StudentProfiles \
  -H 'Accept: text/plain'

```

```http
GET /api/StudentProfiles HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/StudentProfiles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/StudentProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/StudentProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/StudentProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/StudentProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/StudentProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/StudentProfiles`

<h3 id="get__api_studentprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","schoolNumber":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","gradeLevel":0,"enrollmentDate":"2019-08-24T14:15:22Z","isArchived":true,"level":0,"xp":0,"totalPoints":0,"badgesJson":"string","streakDays":0,"lastActivityAt":"2019-08-24T14:15:22Z","completedTaskCount":0,"averageScore":0.1,"lastCourseAccessAt":"2019-08-24T14:15:22Z","tagsJson":"string","metadataJson":"string"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "schoolNumber": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
      "gradeLevel": 0,
      "enrollmentDate": "2019-08-24T14:15:22Z",
      "isArchived": true,
      "level": 0,
      "xp": 0,
      "totalPoints": 0,
      "badgesJson": "string",
      "streakDays": 0,
      "lastActivityAt": "2019-08-24T14:15:22Z",
      "completedTaskCount": 0,
      "averageScore": 0.1,
      "lastCourseAccessAt": "2019-08-24T14:15:22Z",
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}
```

<h3 id="get__api_studentprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListStudentProfileListItemDtoGetListResponse](#schemagetliststudentprofilelistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_StudentProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/StudentProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/StudentProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/StudentProfiles/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/StudentProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/StudentProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/StudentProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/StudentProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/StudentProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/StudentProfiles/{id}`

<h3 id="delete__api_studentprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_studentprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedStudentProfileResponse](#schemadeletedstudentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_StudentProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/StudentProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/StudentProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/StudentProfiles/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/StudentProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/StudentProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/StudentProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/StudentProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/StudentProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/StudentProfiles/{id}`

<h3 id="get__api_studentprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","schoolNumber":"string","gender":0,"notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","gradeLevel":0,"enrollmentDate":"2019-08-24T14:15:22Z","isArchived":true,"level":0,"xp":0,"totalPoints":0,"badgesJson":"string","streakDays":0,"lastActivityAt":"2019-08-24T14:15:22Z","completedTaskCount":0,"averageScore":0.1,"lastCourseAccessAt":"2019-08-24T14:15:22Z","tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="get__api_studentprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdStudentProfileResponse](#schemagetbyidstudentprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-teacherparentlinks">TeacherParentLinks</h1>

## post__api_TeacherParentLinks

> Code samples

```shell
# You can also use wget
curl -X POST /api/TeacherParentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/TeacherParentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherParentLinks',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/TeacherParentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/TeacherParentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/TeacherParentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherParentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/TeacherParentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/TeacherParentLinks`

> Body parameter

```json
{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_teacherparentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTeacherParentLinkCommand](#schemacreateteacherparentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_teacherparentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedTeacherParentLinkResponse](#schemacreatedteacherparentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_TeacherParentLinks

> Code samples

```shell
# You can also use wget
curl -X PUT /api/TeacherParentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/TeacherParentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherParentLinks',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/TeacherParentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/TeacherParentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/TeacherParentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherParentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/TeacherParentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/TeacherParentLinks`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_teacherparentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateTeacherParentLinkCommand](#schemaupdateteacherparentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_teacherparentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedTeacherParentLinkResponse](#schemaupdatedteacherparentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherParentLinks

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherParentLinks \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherParentLinks HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherParentLinks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherParentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherParentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherParentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherParentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherParentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherParentLinks`

<h3 id="get__api_teacherparentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
      "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
      "linkRole": 0,
      "effectiveFrom": "2019-08-24T14:15:22Z",
      "effectiveTo": "2019-08-24T14:15:22Z",
      "isPrimary": true,
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}
```

<h3 id="get__api_teacherparentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListTeacherParentLinkListItemDtoGetListResponse](#schemagetlistteacherparentlinklistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_TeacherParentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/TeacherParentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/TeacherParentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherParentLinks/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/TeacherParentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/TeacherParentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/TeacherParentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherParentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/TeacherParentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/TeacherParentLinks/{id}`

<h3 id="delete__api_teacherparentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_teacherparentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedTeacherParentLinkResponse](#schemadeletedteacherparentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherParentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherParentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherParentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherParentLinks/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherParentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherParentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherParentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherParentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherParentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherParentLinks/{id}`

<h3 id="get__api_teacherparentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","parentProfileId":"40bf0248-1ed0-4b40-9759-9579b17e7870","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="get__api_teacherparentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdTeacherParentLinkResponse](#schemagetbyidteacherparentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-teacherprofiles">TeacherProfiles</h1>

## post__api_TeacherProfiles

> Code samples

```shell
# You can also use wget
curl -X POST /api/TeacherProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/TeacherProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherProfiles',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/TeacherProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/TeacherProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/TeacherProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/TeacherProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/TeacherProfiles`

> Body parameter

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_teacherprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTeacherProfileCommand](#schemacreateteacherprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"branch":"string","notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="post__api_teacherprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedTeacherProfileResponse](#schemacreatedteacherprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_TeacherProfiles

> Code samples

```shell
# You can also use wget
curl -X PUT /api/TeacherProfiles \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/TeacherProfiles HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherProfiles',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/TeacherProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/TeacherProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/TeacherProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/TeacherProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/TeacherProfiles`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_teacherprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateTeacherProfileCommand](#schemaupdateteacherprofilecommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"branch":"string","notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="put__api_teacherprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedTeacherProfileResponse](#schemaupdatedteacherprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherProfiles

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherProfiles \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherProfiles HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherProfiles',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherProfiles',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherProfiles', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherProfiles', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherProfiles");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherProfiles", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherProfiles`

<h3 id="get__api_teacherprofiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"branch":"string","notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","isArchived":true,"tagsJson":"string","metadataJson":"string"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "branch": "string",
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}
```

<h3 id="get__api_teacherprofiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListTeacherProfileListItemDtoGetListResponse](#schemagetlistteacherprofilelistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_TeacherProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/TeacherProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/TeacherProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherProfiles/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/TeacherProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/TeacherProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/TeacherProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/TeacherProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/TeacherProfiles/{id}`

<h3 id="delete__api_teacherprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_teacherprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedTeacherProfileResponse](#schemadeletedteacherprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherProfiles_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherProfiles/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherProfiles/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherProfiles/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherProfiles/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherProfiles/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherProfiles/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherProfiles/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherProfiles/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherProfiles/{id}`

<h3 id="get__api_teacherprofiles_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","userId":"2c4a230c-5085-4924-a3e1-25fb4fc5965b","firstName":"string","lastName":"string","email":"string","alternateEmail":"string","gender":0,"branch":"string","notes":"string","profileImageUrl":"string","phoneNumber":"string","alternatePhoneNumber":"string","locale":"string","isActive":true,"birthDate":"2019-08-24T14:15:22Z","country":"string","city":"string","district":"string","addressLine1":"string","addressLine2":"string","postalCode":"string","linkedInUrl":"string","twitterUrl":"string","schoolId":"dfe953a5-755d-47f9-a230-5efd591653e3","isArchived":true,"tagsJson":"string","metadataJson":"string"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}
```

<h3 id="get__api_teacherprofiles_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdTeacherProfileResponse](#schemagetbyidteacherprofileresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-teacherstudentlinks">TeacherStudentLinks</h1>

## post__api_TeacherStudentLinks

> Code samples

```shell
# You can also use wget
curl -X POST /api/TeacherStudentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
POST /api/TeacherStudentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherStudentLinks',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.post '/api/TeacherStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.post('/api/TeacherStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/TeacherStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/TeacherStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/TeacherStudentLinks`

> Body parameter

```json
{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_teacherstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTeacherStudentLinkCommand](#schemacreateteacherstudentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","academicYear":"string","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="post__api_teacherstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[CreatedTeacherStudentLinkResponse](#schemacreatedteacherstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_TeacherStudentLinks

> Code samples

```shell
# You can also use wget
curl -X PUT /api/TeacherStudentLinks \
  -H 'Content-Type: application/json' \
  -H 'Accept: text/plain'

```

```http
PUT /api/TeacherStudentLinks HTTP/1.1

Content-Type: application/json
Accept: text/plain

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'text/plain'
};

fetch('/api/TeacherStudentLinks',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'text/plain'
}

result = RestClient.put '/api/TeacherStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'text/plain'
}

r = requests.put('/api/TeacherStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/TeacherStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/TeacherStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/TeacherStudentLinks`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_teacherstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateTeacherStudentLinkCommand](#schemaupdateteacherstudentlinkcommand)|false|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","academicYear":"string","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="put__api_teacherstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[UpdatedTeacherStudentLinkResponse](#schemaupdatedteacherstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherStudentLinks

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherStudentLinks \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherStudentLinks HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherStudentLinks',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherStudentLinks',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherStudentLinks', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherStudentLinks', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherStudentLinks");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherStudentLinks", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherStudentLinks`

<h3 id="get__api_teacherstudentlinks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

> Example responses

> 200 Response

```
{"index":0,"size":0,"count":0,"pages":0,"hasPrevious":true,"hasNext":true,"items":[{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","academicYear":"string","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}]}
```

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
      "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
      "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
      "academicYear": "string",
      "linkRole": 0,
      "effectiveFrom": "2019-08-24T14:15:22Z",
      "effectiveTo": "2019-08-24T14:15:22Z",
      "isPrimary": true,
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}
```

<h3 id="get__api_teacherstudentlinks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetListTeacherStudentLinkListItemDtoGetListResponse](#schemagetlistteacherstudentlinklistitemdtogetlistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_TeacherStudentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/TeacherStudentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
DELETE /api/TeacherStudentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherStudentLinks/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.delete '/api/TeacherStudentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.delete('/api/TeacherStudentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/TeacherStudentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherStudentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/TeacherStudentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/TeacherStudentLinks/{id}`

<h3 id="delete__api_teacherstudentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_teacherstudentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[DeletedTeacherStudentLinkResponse](#schemadeletedteacherstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_TeacherStudentLinks_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/TeacherStudentLinks/{id} \
  -H 'Accept: text/plain'

```

```http
GET /api/TeacherStudentLinks/{id} HTTP/1.1

Accept: text/plain

```

```javascript

const headers = {
  'Accept':'text/plain'
};

fetch('/api/TeacherStudentLinks/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'text/plain'
}

result = RestClient.get '/api/TeacherStudentLinks/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'text/plain'
}

r = requests.get('/api/TeacherStudentLinks/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'text/plain',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/TeacherStudentLinks/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/TeacherStudentLinks/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"text/plain"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/TeacherStudentLinks/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/TeacherStudentLinks/{id}`

<h3 id="get__api_teacherstudentlinks_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```
{"id":"497f6eca-6276-4993-bfeb-53cbbbba6f08","teacherProfileId":"2d9cd9d0-b2ed-4384-a874-8aa103503496","studentProfileId":"2d7a1d75-e3ec-42f4-966c-5574b58034f3","classroomId":"744b63ba-b101-4f8d-be04-1680cfa73757","academicYear":"string","linkRole":0,"effectiveFrom":"2019-08-24T14:15:22Z","effectiveTo":"2019-08-24T14:15:22Z","isPrimary":true,"notes":"string","tenantId":"f97df110-f4de-492e-8849-4a6af68026b0"}
```

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}
```

<h3 id="get__api_teacherstudentlinks_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|[GetByIdTeacherStudentLinkResponse](#schemagetbyidteacherstudentlinkresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-useroperationclaims">UserOperationClaims</h1>

## get__api_UserOperationClaims_{Id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/UserOperationClaims/{Id}

```

```http
GET /api/UserOperationClaims/{Id} HTTP/1.1

```

```javascript

fetch('/api/UserOperationClaims/{Id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/UserOperationClaims/{Id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/UserOperationClaims/{Id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/UserOperationClaims/{Id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/UserOperationClaims/{Id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/UserOperationClaims/{Id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/UserOperationClaims/{Id}`

<h3 id="get__api_useroperationclaims_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string(uuid)|true|none|

<h3 id="get__api_useroperationclaims_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_UserOperationClaims

> Code samples

```shell
# You can also use wget
curl -X GET /api/UserOperationClaims

```

```http
GET /api/UserOperationClaims HTTP/1.1

```

```javascript

fetch('/api/UserOperationClaims',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/UserOperationClaims',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/UserOperationClaims')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/UserOperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/UserOperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/UserOperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/UserOperationClaims`

<h3 id="get__api_useroperationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

<h3 id="get__api_useroperationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_UserOperationClaims

> Code samples

```shell
# You can also use wget
curl -X POST /api/UserOperationClaims \
  -H 'Content-Type: application/json'

```

```http
POST /api/UserOperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/UserOperationClaims',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/UserOperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/UserOperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/UserOperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/UserOperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/UserOperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/UserOperationClaims`

> Body parameter

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0
}
```

<h3 id="post__api_useroperationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserOperationClaimCommand](#schemacreateuseroperationclaimcommand)|false|none|

<h3 id="post__api_useroperationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_UserOperationClaims

> Code samples

```shell
# You can also use wget
curl -X PUT /api/UserOperationClaims \
  -H 'Content-Type: application/json'

```

```http
PUT /api/UserOperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/UserOperationClaims',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/api/UserOperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/UserOperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/UserOperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/UserOperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/UserOperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/UserOperationClaims`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0
}
```

<h3 id="put__api_useroperationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserOperationClaimCommand](#schemaupdateuseroperationclaimcommand)|false|none|

<h3 id="put__api_useroperationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_UserOperationClaims

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/UserOperationClaims \
  -H 'Content-Type: application/json'

```

```http
DELETE /api/UserOperationClaims HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/UserOperationClaims',
{
  method: 'DELETE',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.delete '/api/UserOperationClaims',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.delete('/api/UserOperationClaims', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/UserOperationClaims', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/UserOperationClaims");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/UserOperationClaims", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/UserOperationClaims`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_useroperationclaims-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteUserOperationClaimCommand](#schemadeleteuseroperationclaimcommand)|false|none|

<h3 id="delete__api_useroperationclaims-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

<h1 id="webapi-users">Users</h1>

## get__api_Users_{Id}

> Code samples

```shell
# You can also use wget
curl -X GET /api/Users/{Id}

```

```http
GET /api/Users/{Id} HTTP/1.1

```

```javascript

fetch('/api/Users/{Id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Users/{Id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Users/{Id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Users/{Id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users/{Id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Users/{Id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Users/{Id}`

<h3 id="get__api_users_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Id|path|string(uuid)|true|none|

<h3 id="get__api_users_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Users_GetFromAuth

> Code samples

```shell
# You can also use wget
curl -X GET /api/Users/GetFromAuth

```

```http
GET /api/Users/GetFromAuth HTTP/1.1

```

```javascript

fetch('/api/Users/GetFromAuth',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Users/GetFromAuth',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Users/GetFromAuth')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Users/GetFromAuth', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users/GetFromAuth");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Users/GetFromAuth", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Users/GetFromAuth`

<h3 id="get__api_users_getfromauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## get__api_Users

> Code samples

```shell
# You can also use wget
curl -X GET /api/Users

```

```http
GET /api/Users HTTP/1.1

```

```javascript

fetch('/api/Users',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/api/Users',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/api/Users')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/api/Users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/api/Users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /api/Users`

<h3 id="get__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PageIndex|query|integer(int32)|false|none|
|PageSize|query|integer(int32)|false|none|

<h3 id="get__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## post__api_Users

> Code samples

```shell
# You can also use wget
curl -X POST /api/Users \
  -H 'Content-Type: application/json'

```

```http
POST /api/Users HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/api/Users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/api/Users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/api/Users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/api/Users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /api/Users`

> Body parameter

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}
```

<h3 id="post__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserCommand](#schemacreateusercommand)|false|none|

<h3 id="post__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_Users

> Code samples

```shell
# You can also use wget
curl -X PUT /api/Users \
  -H 'Content-Type: application/json'

```

```http
PUT /api/Users HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Users',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/api/Users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/Users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/Users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/Users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/Users`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}
```

<h3 id="put__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserCommand](#schemaupdateusercommand)|false|none|

<h3 id="put__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## delete__api_Users

> Code samples

```shell
# You can also use wget
curl -X DELETE /api/Users \
  -H 'Content-Type: application/json'

```

```http
DELETE /api/Users HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Users',
{
  method: 'DELETE',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.delete '/api/Users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.delete('/api/Users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/api/Users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/api/Users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /api/Users`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

<h3 id="delete__api_users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteUserCommand](#schemadeleteusercommand)|false|none|

<h3 id="delete__api_users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

## put__api_Users_FromAuth

> Code samples

```shell
# You can also use wget
curl -X PUT /api/Users/FromAuth \
  -H 'Content-Type: application/json'

```

```http
PUT /api/Users/FromAuth HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "password": "string",
  "newPassword": "string"
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/api/Users/FromAuth',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/api/Users/FromAuth',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/api/Users/FromAuth', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/api/Users/FromAuth', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/api/Users/FromAuth");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/api/Users/FromAuth", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /api/Users/FromAuth`

> Body parameter

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "password": "string",
  "newPassword": "string"
}
```

<h3 id="put__api_users_fromauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UpdateUserFromAuthCommand](#schemaupdateuserfromauthcommand)|false|none|

<h3 id="put__api_users_fromauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Bearer
</aside>

# Schemas

<h2 id="tocS_CreateAdminProfileCommand">CreateAdminProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateadminprofilecommand"></a>
<a id="schema_CreateAdminProfileCommand"></a>
<a id="tocScreateadminprofilecommand"></a>
<a id="tocscreateadminprofilecommand"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateClassroomCommand">CreateClassroomCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateclassroomcommand"></a>
<a id="schema_CreateClassroomCommand"></a>
<a id="tocScreateclassroomcommand"></a>
<a id="tocscreateclassroomcommand"></a>

```json
{
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string¦null|false|none|none|
|schoolId|string(uuid)|false|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateOperationClaimCommand">CreateOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateoperationclaimcommand"></a>
<a id="schema_CreateOperationClaimCommand"></a>
<a id="tocScreateoperationclaimcommand"></a>
<a id="tocscreateoperationclaimcommand"></a>

```json
{
  "name": "string",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateParentProfileCommand">CreateParentProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateparentprofilecommand"></a>
<a id="schema_CreateParentProfileCommand"></a>
<a id="tocScreateparentprofilecommand"></a>
<a id="tocscreateparentprofilecommand"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateParentStudentLinkCommand">CreateParentStudentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateparentstudentlinkcommand"></a>
<a id="schema_CreateParentStudentLinkCommand"></a>
<a id="tocScreateparentstudentlinkcommand"></a>
<a id="tocscreateparentstudentlinkcommand"></a>

```json
{
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentProfileId|string(uuid)|false|none|none|
|studentProfileId|string(uuid)|false|none|none|
|relationship|[RelationshipType](#schemarelationshiptype)|false|none|none|
|isPrimary|boolean|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateSchoolCommand">CreateSchoolCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateschoolcommand"></a>
<a id="schema_CreateSchoolCommand"></a>
<a id="tocScreateschoolcommand"></a>
<a id="tocscreateschoolcommand"></a>

```json
{
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string¦null|false|none|none|
|type|[SchoolType](#schemaschooltype)|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateStudentProfileCommand">CreateStudentProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreatestudentprofilecommand"></a>
<a id="schema_CreateStudentProfileCommand"></a>
<a id="tocScreatestudentprofilecommand"></a>
<a id="tocscreatestudentprofilecommand"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateTeacherParentLinkCommand">CreateTeacherParentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateteacherparentlinkcommand"></a>
<a id="schema_CreateTeacherParentLinkCommand"></a>
<a id="tocScreateteacherparentlinkcommand"></a>
<a id="tocscreateteacherparentlinkcommand"></a>

```json
{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teacherProfileId|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|false|none|none|
|linkRole|[LinkRoleType](#schemalinkroletype)|false|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateTeacherProfileCommand">CreateTeacherProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateteacherprofilecommand"></a>
<a id="schema_CreateTeacherProfileCommand"></a>
<a id="tocScreateteacherprofilecommand"></a>
<a id="tocscreateteacherprofilecommand"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|branch|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateTeacherStudentLinkCommand">CreateTeacherStudentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateteacherstudentlinkcommand"></a>
<a id="schema_CreateTeacherStudentLinkCommand"></a>
<a id="tocScreateteacherstudentlinkcommand"></a>
<a id="tocscreateteacherstudentlinkcommand"></a>

```json
{
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teacherProfileId|string(uuid)|false|none|none|
|studentProfileId|string(uuid)|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|[LinkRoleType](#schemalinkroletype)|false|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateUserCommand">CreateUserCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateusercommand"></a>
<a id="schema_CreateUserCommand"></a>
<a id="tocScreateusercommand"></a>
<a id="tocscreateusercommand"></a>

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|email|string¦null|false|none|none|
|password|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_CreateUserOperationClaimCommand">CreateUserOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemacreateuseroperationclaimcommand"></a>
<a id="schema_CreateUserOperationClaimCommand"></a>
<a id="tocScreateuseroperationclaimcommand"></a>
<a id="tocscreateuseroperationclaimcommand"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0,
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string(uuid)|false|none|none|
|operationClaimId|integer(int32)|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_CreatedAdminProfileResponse">CreatedAdminProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedadminprofileresponse"></a>
<a id="schema_CreatedAdminProfileResponse"></a>
<a id="tocScreatedadminprofileresponse"></a>
<a id="tocscreatedadminprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_CreatedClassroomResponse">CreatedClassroomResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedclassroomresponse"></a>
<a id="schema_CreatedClassroomResponse"></a>
<a id="tocScreatedclassroomresponse"></a>
<a id="tocscreatedclassroomresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|schoolId|string(uuid)|true|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_CreatedParentProfileResponse">CreatedParentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedparentprofileresponse"></a>
<a id="schema_CreatedParentProfileResponse"></a>
<a id="tocScreatedparentprofileresponse"></a>
<a id="tocscreatedparentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_CreatedParentStudentLinkResponse">CreatedParentStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedparentstudentlinkresponse"></a>
<a id="schema_CreatedParentStudentLinkResponse"></a>
<a id="tocScreatedparentstudentlinkresponse"></a>
<a id="tocscreatedparentstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|relationship|integer(int32)|true|none|none|
|isPrimary|boolean|true|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_CreatedSchoolResponse">CreatedSchoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedschoolresponse"></a>
<a id="schema_CreatedSchoolResponse"></a>
<a id="tocScreatedschoolresponse"></a>
<a id="tocscreatedschoolresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|type|integer(int32)|true|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_CreatedStudentProfileResponse">CreatedStudentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedstudentprofileresponse"></a>
<a id="schema_CreatedStudentProfileResponse"></a>
<a id="tocScreatedstudentprofileresponse"></a>
<a id="tocscreatedstudentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_CreatedTeacherParentLinkResponse">CreatedTeacherParentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedteacherparentlinkresponse"></a>
<a id="schema_CreatedTeacherParentLinkResponse"></a>
<a id="tocScreatedteacherparentlinkresponse"></a>
<a id="tocscreatedteacherparentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|parentProfileId|string(uuid)|true|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_CreatedTeacherProfileResponse">CreatedTeacherProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedteacherprofileresponse"></a>
<a id="schema_CreatedTeacherProfileResponse"></a>
<a id="tocScreatedteacherprofileresponse"></a>
<a id="tocscreatedteacherprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|branch|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_CreatedTeacherStudentLinkResponse">CreatedTeacherStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedteacherstudentlinkresponse"></a>
<a id="schema_CreatedTeacherStudentLinkResponse"></a>
<a id="tocScreatedteacherstudentlinkresponse"></a>
<a id="tocscreatedteacherstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_DeleteOperationClaimCommand">DeleteOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemadeleteoperationclaimcommand"></a>
<a id="schema_DeleteOperationClaimCommand"></a>
<a id="tocSdeleteoperationclaimcommand"></a>
<a id="tocsdeleteoperationclaimcommand"></a>

```json
{
  "id": 0,
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_DeleteUserCommand">DeleteUserCommand</h2>
<!-- backwards compatibility -->
<a id="schemadeleteusercommand"></a>
<a id="schema_DeleteUserCommand"></a>
<a id="tocSdeleteusercommand"></a>
<a id="tocsdeleteusercommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_DeleteUserOperationClaimCommand">DeleteUserOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemadeleteuseroperationclaimcommand"></a>
<a id="schema_DeleteUserOperationClaimCommand"></a>
<a id="tocSdeleteuseroperationclaimcommand"></a>
<a id="tocsdeleteuseroperationclaimcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_DeletedAdminProfileResponse">DeletedAdminProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedadminprofileresponse"></a>
<a id="schema_DeletedAdminProfileResponse"></a>
<a id="tocSdeletedadminprofileresponse"></a>
<a id="tocsdeletedadminprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedClassroomResponse">DeletedClassroomResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedclassroomresponse"></a>
<a id="schema_DeletedClassroomResponse"></a>
<a id="tocSdeletedclassroomresponse"></a>
<a id="tocsdeletedclassroomresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedParentProfileResponse">DeletedParentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedparentprofileresponse"></a>
<a id="schema_DeletedParentProfileResponse"></a>
<a id="tocSdeletedparentprofileresponse"></a>
<a id="tocsdeletedparentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedParentStudentLinkResponse">DeletedParentStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedparentstudentlinkresponse"></a>
<a id="schema_DeletedParentStudentLinkResponse"></a>
<a id="tocSdeletedparentstudentlinkresponse"></a>
<a id="tocsdeletedparentstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedSchoolResponse">DeletedSchoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedschoolresponse"></a>
<a id="schema_DeletedSchoolResponse"></a>
<a id="tocSdeletedschoolresponse"></a>
<a id="tocsdeletedschoolresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedStudentProfileResponse">DeletedStudentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedstudentprofileresponse"></a>
<a id="schema_DeletedStudentProfileResponse"></a>
<a id="tocSdeletedstudentprofileresponse"></a>
<a id="tocsdeletedstudentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedTeacherParentLinkResponse">DeletedTeacherParentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedteacherparentlinkresponse"></a>
<a id="schema_DeletedTeacherParentLinkResponse"></a>
<a id="tocSdeletedteacherparentlinkresponse"></a>
<a id="tocsdeletedteacherparentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedTeacherProfileResponse">DeletedTeacherProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedteacherprofileresponse"></a>
<a id="schema_DeletedTeacherProfileResponse"></a>
<a id="tocSdeletedteacherprofileresponse"></a>
<a id="tocsdeletedteacherprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_DeletedTeacherStudentLinkResponse">DeletedTeacherStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeletedteacherstudentlinkresponse"></a>
<a id="schema_DeletedTeacherStudentLinkResponse"></a>
<a id="tocSdeletedteacherstudentlinkresponse"></a>
<a id="tocsdeletedteacherstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|

<h2 id="tocS_ForgotPasswordDto">ForgotPasswordDto</h2>
<!-- backwards compatibility -->
<a id="schemaforgotpassworddto"></a>
<a id="schema_ForgotPasswordDto"></a>
<a id="tocSforgotpassworddto"></a>
<a id="tocsforgotpassworddto"></a>

```json
{
  "email": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string¦null|false|none|none|

<h2 id="tocS_GenderType">GenderType</h2>
<!-- backwards compatibility -->
<a id="schemagendertype"></a>
<a id="schema_GenderType"></a>
<a id="tocSgendertype"></a>
<a id="tocsgendertype"></a>

```json
0

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|0|
|*anonymous*|1|
|*anonymous*|2|
|*anonymous*|3|

<h2 id="tocS_GetByIdAdminProfileResponse">GetByIdAdminProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidadminprofileresponse"></a>
<a id="schema_GetByIdAdminProfileResponse"></a>
<a id="tocSgetbyidadminprofileresponse"></a>
<a id="tocsgetbyidadminprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetByIdClassroomResponse">GetByIdClassroomResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidclassroomresponse"></a>
<a id="schema_GetByIdClassroomResponse"></a>
<a id="tocSgetbyidclassroomresponse"></a>
<a id="tocsgetbyidclassroomresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|schoolId|string(uuid)|true|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetByIdParentProfileResponse">GetByIdParentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidparentprofileresponse"></a>
<a id="schema_GetByIdParentProfileResponse"></a>
<a id="tocSgetbyidparentprofileresponse"></a>
<a id="tocsgetbyidparentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetByIdParentStudentLinkResponse">GetByIdParentStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidparentstudentlinkresponse"></a>
<a id="schema_GetByIdParentStudentLinkResponse"></a>
<a id="tocSgetbyidparentstudentlinkresponse"></a>
<a id="tocsgetbyidparentstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|relationship|integer(int32)|true|none|none|
|isPrimary|boolean|true|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetByIdSchoolResponse">GetByIdSchoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidschoolresponse"></a>
<a id="schema_GetByIdSchoolResponse"></a>
<a id="tocSgetbyidschoolresponse"></a>
<a id="tocsgetbyidschoolresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|type|integer(int32)|true|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetByIdStudentProfileResponse">GetByIdStudentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidstudentprofileresponse"></a>
<a id="schema_GetByIdStudentProfileResponse"></a>
<a id="tocSgetbyidstudentprofileresponse"></a>
<a id="tocsgetbyidstudentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetByIdTeacherParentLinkResponse">GetByIdTeacherParentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidteacherparentlinkresponse"></a>
<a id="schema_GetByIdTeacherParentLinkResponse"></a>
<a id="tocSgetbyidteacherparentlinkresponse"></a>
<a id="tocsgetbyidteacherparentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|parentProfileId|string(uuid)|true|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetByIdTeacherProfileResponse">GetByIdTeacherProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidteacherprofileresponse"></a>
<a id="schema_GetByIdTeacherProfileResponse"></a>
<a id="tocSgetbyidteacherprofileresponse"></a>
<a id="tocsgetbyidteacherprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|branch|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetByIdTeacherStudentLinkResponse">GetByIdTeacherStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetbyidteacherstudentlinkresponse"></a>
<a id="schema_GetByIdTeacherStudentLinkResponse"></a>
<a id="tocSgetbyidteacherstudentlinkresponse"></a>
<a id="tocsgetbyidteacherstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListAdminProfileListItemDto">GetListAdminProfileListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistadminprofilelistitemdto"></a>
<a id="schema_GetListAdminProfileListItemDto"></a>
<a id="tocSgetlistadminprofilelistitemdto"></a>
<a id="tocsgetlistadminprofilelistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetListAdminProfileListItemDtoGetListResponse">GetListAdminProfileListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistadminprofilelistitemdtogetlistresponse"></a>
<a id="schema_GetListAdminProfileListItemDtoGetListResponse"></a>
<a id="tocSgetlistadminprofilelistitemdtogetlistresponse"></a>
<a id="tocsgetlistadminprofilelistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListAdminProfileListItemDto](#schemagetlistadminprofilelistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListClassroomListItemDto">GetListClassroomListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistclassroomlistitemdto"></a>
<a id="schema_GetListClassroomListItemDto"></a>
<a id="tocSgetlistclassroomlistitemdto"></a>
<a id="tocsgetlistclassroomlistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|schoolId|string(uuid)|true|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListClassroomListItemDtoGetListResponse">GetListClassroomListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistclassroomlistitemdtogetlistresponse"></a>
<a id="schema_GetListClassroomListItemDtoGetListResponse"></a>
<a id="tocSgetlistclassroomlistitemdtogetlistresponse"></a>
<a id="tocsgetlistclassroomlistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "grade": "string",
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListClassroomListItemDto](#schemagetlistclassroomlistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListParentProfileListItemDto">GetListParentProfileListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistparentprofilelistitemdto"></a>
<a id="schema_GetListParentProfileListItemDto"></a>
<a id="tocSgetlistparentprofilelistitemdto"></a>
<a id="tocsgetlistparentprofilelistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetListParentProfileListItemDtoGetListResponse">GetListParentProfileListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistparentprofilelistitemdtogetlistresponse"></a>
<a id="schema_GetListParentProfileListItemDtoGetListResponse"></a>
<a id="tocSgetlistparentprofilelistitemdtogetlistresponse"></a>
<a id="tocsgetlistparentprofilelistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListParentProfileListItemDto](#schemagetlistparentprofilelistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListParentStudentLinkListItemDto">GetListParentStudentLinkListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistparentstudentlinklistitemdto"></a>
<a id="schema_GetListParentStudentLinkListItemDto"></a>
<a id="tocSgetlistparentstudentlinklistitemdto"></a>
<a id="tocsgetlistparentstudentlinklistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|relationship|integer(int32)|true|none|none|
|isPrimary|boolean|true|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListParentStudentLinkListItemDtoGetListResponse">GetListParentStudentLinkListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistparentstudentlinklistitemdtogetlistresponse"></a>
<a id="schema_GetListParentStudentLinkListItemDtoGetListResponse"></a>
<a id="tocSgetlistparentstudentlinklistitemdtogetlistresponse"></a>
<a id="tocsgetlistparentstudentlinklistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
      "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
      "relationship": 0,
      "isPrimary": true,
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListParentStudentLinkListItemDto](#schemagetlistparentstudentlinklistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListSchoolListItemDto">GetListSchoolListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistschoollistitemdto"></a>
<a id="schema_GetListSchoolListItemDto"></a>
<a id="tocSgetlistschoollistitemdto"></a>
<a id="tocsgetlistschoollistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|type|integer(int32)|true|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListSchoolListItemDtoGetListResponse">GetListSchoolListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistschoollistitemdtogetlistresponse"></a>
<a id="schema_GetListSchoolListItemDtoGetListResponse"></a>
<a id="tocSgetlistschoollistitemdtogetlistresponse"></a>
<a id="tocsgetlistschoollistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": 0,
      "city": "string",
      "district": "string",
      "country": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "phone": "string",
      "email": "string",
      "websiteUrl": "string",
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListSchoolListItemDto](#schemagetlistschoollistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListStudentProfileListItemDto">GetListStudentProfileListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetliststudentprofilelistitemdto"></a>
<a id="schema_GetListStudentProfileListItemDto"></a>
<a id="tocSgetliststudentprofilelistitemdto"></a>
<a id="tocsgetliststudentprofilelistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetListStudentProfileListItemDtoGetListResponse">GetListStudentProfileListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetliststudentprofilelistitemdtogetlistresponse"></a>
<a id="schema_GetListStudentProfileListItemDtoGetListResponse"></a>
<a id="tocSgetliststudentprofilelistitemdtogetlistresponse"></a>
<a id="tocsgetliststudentprofilelistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "schoolNumber": "string",
      "gender": 0,
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
      "gradeLevel": 0,
      "enrollmentDate": "2019-08-24T14:15:22Z",
      "isArchived": true,
      "level": 0,
      "xp": 0,
      "totalPoints": 0,
      "badgesJson": "string",
      "streakDays": 0,
      "lastActivityAt": "2019-08-24T14:15:22Z",
      "completedTaskCount": 0,
      "averageScore": 0.1,
      "lastCourseAccessAt": "2019-08-24T14:15:22Z",
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListStudentProfileListItemDto](#schemagetliststudentprofilelistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListTeacherParentLinkListItemDto">GetListTeacherParentLinkListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherparentlinklistitemdto"></a>
<a id="schema_GetListTeacherParentLinkListItemDto"></a>
<a id="tocSgetlistteacherparentlinklistitemdto"></a>
<a id="tocsgetlistteacherparentlinklistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|parentProfileId|string(uuid)|true|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListTeacherParentLinkListItemDtoGetListResponse">GetListTeacherParentLinkListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherparentlinklistitemdtogetlistresponse"></a>
<a id="schema_GetListTeacherParentLinkListItemDtoGetListResponse"></a>
<a id="tocSgetlistteacherparentlinklistitemdtogetlistresponse"></a>
<a id="tocsgetlistteacherparentlinklistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
      "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
      "linkRole": 0,
      "effectiveFrom": "2019-08-24T14:15:22Z",
      "effectiveTo": "2019-08-24T14:15:22Z",
      "isPrimary": true,
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListTeacherParentLinkListItemDto](#schemagetlistteacherparentlinklistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListTeacherProfileListItemDto">GetListTeacherProfileListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherprofilelistitemdto"></a>
<a id="schema_GetListTeacherProfileListItemDto"></a>
<a id="tocSgetlistteacherprofilelistitemdto"></a>
<a id="tocsgetlistteacherprofilelistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|branch|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_GetListTeacherProfileListItemDtoGetListResponse">GetListTeacherProfileListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherprofilelistitemdtogetlistresponse"></a>
<a id="schema_GetListTeacherProfileListItemDtoGetListResponse"></a>
<a id="tocSgetlistteacherprofilelistitemdtogetlistresponse"></a>
<a id="tocsgetlistteacherprofilelistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "alternateEmail": "string",
      "gender": 0,
      "branch": "string",
      "notes": "string",
      "profileImageUrl": "string",
      "phoneNumber": "string",
      "alternatePhoneNumber": "string",
      "locale": "string",
      "isActive": true,
      "birthDate": "2019-08-24T14:15:22Z",
      "country": "string",
      "city": "string",
      "district": "string",
      "addressLine1": "string",
      "addressLine2": "string",
      "postalCode": "string",
      "linkedInUrl": "string",
      "twitterUrl": "string",
      "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
      "isArchived": true,
      "tagsJson": "string",
      "metadataJson": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListTeacherProfileListItemDto](#schemagetlistteacherprofilelistitemdto)]¦null|false|none|none|

<h2 id="tocS_GetListTeacherStudentLinkListItemDto">GetListTeacherStudentLinkListItemDto</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherstudentlinklistitemdto"></a>
<a id="schema_GetListTeacherStudentLinkListItemDto"></a>
<a id="tocSgetlistteacherstudentlinklistitemdto"></a>
<a id="tocsgetlistteacherstudentlinklistitemdto"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_GetListTeacherStudentLinkListItemDtoGetListResponse">GetListTeacherStudentLinkListItemDtoGetListResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistteacherstudentlinklistitemdtogetlistresponse"></a>
<a id="schema_GetListTeacherStudentLinkListItemDtoGetListResponse"></a>
<a id="tocSgetlistteacherstudentlinklistitemdtogetlistresponse"></a>
<a id="tocsgetlistteacherstudentlinklistitemdtogetlistresponse"></a>

```json
{
  "index": 0,
  "size": 0,
  "count": 0,
  "pages": 0,
  "hasPrevious": true,
  "hasNext": true,
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
      "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
      "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
      "academicYear": "string",
      "linkRole": 0,
      "effectiveFrom": "2019-08-24T14:15:22Z",
      "effectiveTo": "2019-08-24T14:15:22Z",
      "isPrimary": true,
      "notes": "string",
      "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|index|integer(int32)|false|none|none|
|size|integer(int32)|false|none|none|
|count|integer(int32)|false|none|none|
|pages|integer(int32)|false|none|none|
|hasPrevious|boolean|false|none|none|
|hasNext|boolean|false|none|none|
|items|[[GetListTeacherStudentLinkListItemDto](#schemagetlistteacherstudentlinklistitemdto)]¦null|false|none|none|

<h2 id="tocS_LinkRoleType">LinkRoleType</h2>
<!-- backwards compatibility -->
<a id="schemalinkroletype"></a>
<a id="schema_LinkRoleType"></a>
<a id="tocSlinkroletype"></a>
<a id="tocslinkroletype"></a>

```json
0

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|0|
|*anonymous*|1|
|*anonymous*|2|
|*anonymous*|3|
|*anonymous*|4|

<h2 id="tocS_RelationshipType">RelationshipType</h2>
<!-- backwards compatibility -->
<a id="schemarelationshiptype"></a>
<a id="schema_RelationshipType"></a>
<a id="tocSrelationshiptype"></a>
<a id="tocsrelationshiptype"></a>

```json
0

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|0|
|*anonymous*|1|
|*anonymous*|2|
|*anonymous*|3|
|*anonymous*|4|

<h2 id="tocS_ResetPasswordDto">ResetPasswordDto</h2>
<!-- backwards compatibility -->
<a id="schemaresetpassworddto"></a>
<a id="schema_ResetPasswordDto"></a>
<a id="tocSresetpassworddto"></a>
<a id="tocsresetpassworddto"></a>

```json
{
  "password": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string¦null|false|none|none|

<h2 id="tocS_SchoolType">SchoolType</h2>
<!-- backwards compatibility -->
<a id="schemaschooltype"></a>
<a id="schema_SchoolType"></a>
<a id="tocSschooltype"></a>
<a id="tocsschooltype"></a>

```json
0

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*anonymous*|0|
|*anonymous*|1|
|*anonymous*|2|
|*anonymous*|3|
|*anonymous*|4|

<h2 id="tocS_UpdateAdminProfileCommand">UpdateAdminProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateadminprofilecommand"></a>
<a id="schema_UpdateAdminProfileCommand"></a>
<a id="tocSupdateadminprofilecommand"></a>
<a id="tocsupdateadminprofilecommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateClassroomCommand">UpdateClassroomCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateclassroomcommand"></a>
<a id="schema_UpdateClassroomCommand"></a>
<a id="tocSupdateclassroomcommand"></a>
<a id="tocsupdateclassroomcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string¦null|false|none|none|
|schoolId|string(uuid)|false|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateOperationClaimCommand">UpdateOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateoperationclaimcommand"></a>
<a id="schema_UpdateOperationClaimCommand"></a>
<a id="tocSupdateoperationclaimcommand"></a>
<a id="tocsupdateoperationclaimcommand"></a>

```json
{
  "id": 0,
  "name": "string",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|name|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateParentProfileCommand">UpdateParentProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparentprofilecommand"></a>
<a id="schema_UpdateParentProfileCommand"></a>
<a id="tocSupdateparentprofilecommand"></a>
<a id="tocsupdateparentprofilecommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateParentStudentLinkCommand">UpdateParentStudentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateparentstudentlinkcommand"></a>
<a id="schema_UpdateParentStudentLinkCommand"></a>
<a id="tocSupdateparentstudentlinkcommand"></a>
<a id="tocsupdateparentstudentlinkcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|false|none|none|
|studentProfileId|string(uuid)|false|none|none|
|relationship|[RelationshipType](#schemarelationshiptype)|false|none|none|
|isPrimary|boolean|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateSchoolCommand">UpdateSchoolCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateschoolcommand"></a>
<a id="schema_UpdateSchoolCommand"></a>
<a id="tocSupdateschoolcommand"></a>
<a id="tocsupdateschoolcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string¦null|false|none|none|
|type|[SchoolType](#schemaschooltype)|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateStudentProfileCommand">UpdateStudentProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdatestudentprofilecommand"></a>
<a id="schema_UpdateStudentProfileCommand"></a>
<a id="tocSupdatestudentprofilecommand"></a>
<a id="tocsupdatestudentprofilecommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "schoolNumber": "string",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateTeacherParentLinkCommand">UpdateTeacherParentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteacherparentlinkcommand"></a>
<a id="schema_UpdateTeacherParentLinkCommand"></a>
<a id="tocSupdateteacherparentlinkcommand"></a>
<a id="tocsupdateteacherparentlinkcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|false|none|none|
|linkRole|[LinkRoleType](#schemalinkroletype)|false|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateTeacherProfileCommand">UpdateTeacherProfileCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteacherprofilecommand"></a>
<a id="schema_UpdateTeacherProfileCommand"></a>
<a id="tocSupdateteacherprofilecommand"></a>
<a id="tocsupdateteacherprofilecommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "profileImageUrl": "string",
  "email": "string",
  "alternateEmail": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "gender": 0,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "branch": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "notes": "string",
  "tagsJson": "string",
  "metadataJson": "string",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|gender|[GenderType](#schemagendertype)|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|branch|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateTeacherStudentLinkCommand">UpdateTeacherStudentLinkCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateteacherstudentlinkcommand"></a>
<a id="schema_UpdateTeacherStudentLinkCommand"></a>
<a id="tocSupdateteacherstudentlinkcommand"></a>
<a id="tocsupdateteacherstudentlinkcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0",
  "roles": [
    "string"
  ],
  "bypassCache": true,
  "cacheKey": "string",
  "cacheGroupKey": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|false|none|none|
|studentProfileId|string(uuid)|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|[LinkRoleType](#schemalinkroletype)|false|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|
|bypassCache|boolean|false|read-only|none|
|cacheKey|string¦null|false|read-only|none|
|cacheGroupKey|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateUserCommand">UpdateUserCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateusercommand"></a>
<a id="schema_UpdateUserCommand"></a>
<a id="tocSupdateusercommand"></a>
<a id="tocsupdateusercommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|email|string¦null|false|none|none|
|password|string¦null|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdateUserFromAuthCommand">UpdateUserFromAuthCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserfromauthcommand"></a>
<a id="schema_UpdateUserFromAuthCommand"></a>
<a id="tocSupdateuserfromauthcommand"></a>
<a id="tocsupdateuserfromauthcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "firstName": "string",
  "lastName": "string",
  "password": "string",
  "newPassword": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|firstName|string¦null|false|none|none|
|lastName|string¦null|false|none|none|
|password|string¦null|false|none|none|
|newPassword|string¦null|false|none|none|

<h2 id="tocS_UpdateUserOperationClaimCommand">UpdateUserOperationClaimCommand</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuseroperationclaimcommand"></a>
<a id="schema_UpdateUserOperationClaimCommand"></a>
<a id="tocSupdateuseroperationclaimcommand"></a>
<a id="tocsupdateuseroperationclaimcommand"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "operationClaimId": 0,
  "roles": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|false|none|none|
|operationClaimId|integer(int32)|false|none|none|
|roles|[string]¦null|false|read-only|none|

<h2 id="tocS_UpdatedAdminProfileResponse">UpdatedAdminProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedadminprofileresponse"></a>
<a id="schema_UpdatedAdminProfileResponse"></a>
<a id="tocSupdatedadminprofileresponse"></a>
<a id="tocsupdatedadminprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_UpdatedClassroomResponse">UpdatedClassroomResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedclassroomresponse"></a>
<a id="schema_UpdatedClassroomResponse"></a>
<a id="tocSupdatedclassroomresponse"></a>
<a id="tocsupdatedclassroomresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "grade": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|schoolId|string(uuid)|true|none|none|
|grade|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_UpdatedParentProfileResponse">UpdatedParentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedparentprofileresponse"></a>
<a id="schema_UpdatedParentProfileResponse"></a>
<a id="tocSupdatedparentprofileresponse"></a>
<a id="tocsupdatedparentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_UpdatedParentStudentLinkResponse">UpdatedParentStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedparentstudentlinkresponse"></a>
<a id="schema_UpdatedParentStudentLinkResponse"></a>
<a id="tocSupdatedparentstudentlinkresponse"></a>
<a id="tocsupdatedparentstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "relationship": 0,
  "isPrimary": true,
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|parentProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|relationship|integer(int32)|true|none|none|
|isPrimary|boolean|true|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_UpdatedSchoolResponse">UpdatedSchoolResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedschoolresponse"></a>
<a id="schema_UpdatedSchoolResponse"></a>
<a id="tocSupdatedschoolresponse"></a>
<a id="tocsupdatedschoolresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": 0,
  "city": "string",
  "district": "string",
  "country": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "phone": "string",
  "email": "string",
  "websiteUrl": "string",
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|name|string|true|none|none|
|type|integer(int32)|true|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|country|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|phone|string¦null|false|none|none|
|email|string¦null|false|none|none|
|websiteUrl|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_UpdatedStudentProfileResponse">UpdatedStudentProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedstudentprofileresponse"></a>
<a id="schema_UpdatedStudentProfileResponse"></a>
<a id="tocSupdatedstudentprofileresponse"></a>
<a id="tocsupdatedstudentprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "schoolNumber": "string",
  "gender": 0,
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "gradeLevel": 0,
  "enrollmentDate": "2019-08-24T14:15:22Z",
  "isArchived": true,
  "level": 0,
  "xp": 0,
  "totalPoints": 0,
  "badgesJson": "string",
  "streakDays": 0,
  "lastActivityAt": "2019-08-24T14:15:22Z",
  "completedTaskCount": 0,
  "averageScore": 0.1,
  "lastCourseAccessAt": "2019-08-24T14:15:22Z",
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|schoolNumber|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|gradeLevel|integer(int32)¦null|false|none|none|
|enrollmentDate|string(date-time)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|level|integer(int32)|false|none|none|
|xp|integer(int32)|false|none|none|
|totalPoints|integer(int32)|false|none|none|
|badgesJson|string¦null|false|none|none|
|streakDays|integer(int32)|false|none|none|
|lastActivityAt|string(date-time)¦null|false|none|none|
|completedTaskCount|integer(int32)|false|none|none|
|averageScore|number(double)|false|none|none|
|lastCourseAccessAt|string(date-time)¦null|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_UpdatedTeacherParentLinkResponse">UpdatedTeacherParentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedteacherparentlinkresponse"></a>
<a id="schema_UpdatedTeacherParentLinkResponse"></a>
<a id="tocSupdatedteacherparentlinkresponse"></a>
<a id="tocsupdatedteacherparentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "parentProfileId": "40bf0248-1ed0-4b40-9759-9579b17e7870",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|parentProfileId|string(uuid)|true|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_UpdatedTeacherProfileResponse">UpdatedTeacherProfileResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedteacherprofileresponse"></a>
<a id="schema_UpdatedTeacherProfileResponse"></a>
<a id="tocSupdatedteacherprofileresponse"></a>
<a id="tocsupdatedteacherprofileresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "alternateEmail": "string",
  "gender": 0,
  "branch": "string",
  "notes": "string",
  "profileImageUrl": "string",
  "phoneNumber": "string",
  "alternatePhoneNumber": "string",
  "locale": "string",
  "isActive": true,
  "birthDate": "2019-08-24T14:15:22Z",
  "country": "string",
  "city": "string",
  "district": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "postalCode": "string",
  "linkedInUrl": "string",
  "twitterUrl": "string",
  "schoolId": "dfe953a5-755d-47f9-a230-5efd591653e3",
  "isArchived": true,
  "tagsJson": "string",
  "metadataJson": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|userId|string(uuid)|true|none|none|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|email|string¦null|false|none|none|
|alternateEmail|string¦null|false|none|none|
|gender|integer(int32)|true|none|none|
|branch|string¦null|false|none|none|
|notes|string¦null|false|none|none|
|profileImageUrl|string¦null|false|none|none|
|phoneNumber|string¦null|false|none|none|
|alternatePhoneNumber|string¦null|false|none|none|
|locale|string¦null|false|none|none|
|isActive|boolean|false|none|none|
|birthDate|string(date-time)¦null|false|none|none|
|country|string¦null|false|none|none|
|city|string¦null|false|none|none|
|district|string¦null|false|none|none|
|addressLine1|string¦null|false|none|none|
|addressLine2|string¦null|false|none|none|
|postalCode|string¦null|false|none|none|
|linkedInUrl|string¦null|false|none|none|
|twitterUrl|string¦null|false|none|none|
|schoolId|string(uuid)¦null|false|none|none|
|isArchived|boolean|false|none|none|
|tagsJson|string¦null|false|none|none|
|metadataJson|string¦null|false|none|none|

<h2 id="tocS_UpdatedTeacherStudentLinkResponse">UpdatedTeacherStudentLinkResponse</h2>
<!-- backwards compatibility -->
<a id="schemaupdatedteacherstudentlinkresponse"></a>
<a id="schema_UpdatedTeacherStudentLinkResponse"></a>
<a id="tocSupdatedteacherstudentlinkresponse"></a>
<a id="tocsupdatedteacherstudentlinkresponse"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "teacherProfileId": "2d9cd9d0-b2ed-4384-a874-8aa103503496",
  "studentProfileId": "2d7a1d75-e3ec-42f4-966c-5574b58034f3",
  "classroomId": "744b63ba-b101-4f8d-be04-1680cfa73757",
  "academicYear": "string",
  "linkRole": 0,
  "effectiveFrom": "2019-08-24T14:15:22Z",
  "effectiveTo": "2019-08-24T14:15:22Z",
  "isPrimary": true,
  "notes": "string",
  "tenantId": "f97df110-f4de-492e-8849-4a6af68026b0"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|teacherProfileId|string(uuid)|true|none|none|
|studentProfileId|string(uuid)|true|none|none|
|classroomId|string(uuid)¦null|false|none|none|
|academicYear|string¦null|false|none|none|
|linkRole|integer(int32)|true|none|none|
|effectiveFrom|string(date-time)¦null|false|none|none|
|effectiveTo|string(date-time)¦null|false|none|none|
|isPrimary|boolean|true|none|none|
|notes|string¦null|false|none|none|
|tenantId|string(uuid)¦null|false|none|none|

<h2 id="tocS_UserForLoginDto">UserForLoginDto</h2>
<!-- backwards compatibility -->
<a id="schemauserforlogindto"></a>
<a id="schema_UserForLoginDto"></a>
<a id="tocSuserforlogindto"></a>
<a id="tocsuserforlogindto"></a>

```json
{
  "email": "string",
  "password": "string",
  "authenticatorCode": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string¦null|false|none|none|
|password|string¦null|false|none|none|
|authenticatorCode|string¦null|false|none|none|

<h2 id="tocS_UserForRegisterDto">UserForRegisterDto</h2>
<!-- backwards compatibility -->
<a id="schemauserforregisterdto"></a>
<a id="schema_UserForRegisterDto"></a>
<a id="tocSuserforregisterdto"></a>
<a id="tocsuserforregisterdto"></a>

```json
{
  "email": "string",
  "password": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string¦null|false|none|none|
|password|string¦null|false|none|none|

