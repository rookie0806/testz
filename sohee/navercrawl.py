from bs4 import BeautifulSoup, SoupStrainer
import re
import requests

import urllib.request
import os
from io import BytesIO
import time
from urllib.parse import urlparse
from uuid import uuid4
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")
import django
import cv2
django.setup()
from django.core.files import File
from PIL import Image as ING
from sohee.crawl.models import Data
from django.core.files.temp import NamedTemporaryFile
from uuid import uuid4


def download(imageurl,url):
    result = urllib.request.urlretrieve(imageurl)
    data = Data()    
    uuid_name = uuid4().hex
    data.image.save(uuid_name + '.jpg',File(open(result[0], 'rb')))
    data.url = url
    data.save()


def blogdownload(blogid):
    list_logNo = []
    for i in range(1,30) :
        main_url = "https://m.blog.naver.com/rego/ThumbnailPostListInfo.naver?blogId="+blogid+"&categoryNo=0&currentPage="+str(i)+"&logCode=0"
        headers={
        'referer': 'https://m.blog.naver.com/PostList.naver?blogId="+blogid+"&categoryNo=0&listStyle=style3'
        }
        arr = requests.get(main_url,headers=headers).text.split('"logNo":')
        print(i)
        if len(arr) == 1:
            break
        for j in range(1,len(arr)):
            list_logNo.append(requests.get(main_url,headers=headers).text.split('"logNo":')[j].split(',"titleWithInspectMessage"')[0])
        print(list_logNo)
    for i in range(0,len(list_logNo)):
        target_url = "https://m.blog.naver.com/"+blogid+"/"+list_logNo[i]
        url = "https://m.blog.naver.com/PostView.naver?blogId="+blogid+"&logNo="+list_logNo[i]
        image_url = requests.get(url).text.split('"og:image" content="')[1].split('"/>')[0]
        print(image_url)
        download(image_url,target_url)
if __name__ == "__main__":
    blogdownload("0isohee")

    