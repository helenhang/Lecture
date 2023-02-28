Python3 pip
pip 是 Python 包管理工具，该工具提供了对 Python 包的查找、下载、安装、卸载的功能。
软件包也可以在 https://pypi.org/ 中找到。
目前最新的 Python 版本已经预装了 pip。
注意：Python 2.7.9 + 或 Python 3.4+ 以上版本都自带 pip 工具。
如果没有安装可以参考：Python pip 安装与使用。
查看是否已经安装 pip 可以使用以下命令：
`pip --version`
下载安装包使用以下命令：
`pip install some-package-name`
例如我们安装 numpy 包：
`pip install numpy`

#### 安装 Pipenv
Pipenv 是 Python 项目的依赖管理器。如果您熟悉 Node.js 的 npm 或 Ruby 的 bundler，那么它们在思路上与这些工具类似。尽管 pip 可以安装 Python 包， 但仍推荐使用 Pipenv，因为它是一种更高级的工具，可简化依赖关系管理的常见使用情况。
使用 pip 来安装 Pipenv：
`$ pip install --user pipenv`

使用安装好的包
现在安装了 Requests，您可以创建一个简单的 main.py 文件来使用它：
```python
import requests
response = requests.get('https://httpbin.org/ip')
print('Your IP is {0}'.format(response.json()['origin']))
```
然后您就可以使用 pipenv run 运行这段脚本：
`$ pipenv run python main.py`
您应该获取到类似的输出：
Your IP is 8.8.8.8
使用 `$ pipenv run` 可确保您的安装包可用于您的脚本。我们还可以生成一个新的 shell， 确保所有命令都可以使用 $ pipenv shell 访问已安装的包。
