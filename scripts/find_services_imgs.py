import re
with open('app/services/page.js','r',encoding='utf-8') as f:
    content = f.read()
imgs = re.findall(r'img:\s*["\']([^"\']+)["\']', content)
for img in imgs:
    print(img)
