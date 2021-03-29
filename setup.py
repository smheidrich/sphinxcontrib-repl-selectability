from setuptools import setup, find_packages

def readme():
  try:
    with open('README.rst') as f:
      return f.read()
  except IOError:
    pass

setup(
  name='sphinxcontrib-repl-selectability',
  version='0.1.0',
  url='https://github.com/smheidrich/sphinxcontrib-repl-selectability',
  license='MIT',
  author='Shahriar Heidrich',
  description='Sphinx extension: toggle selectability of prompts and outputs',
  long_description=readme(),
  zip_safe=False,
  python_requires='>=3.5',
  classifiers=[
    'Development Status :: 2 - Pre-Alpha',
    'Environment :: Web Environment',
    'Intended Audience :: Developers',
    'License :: OSI Approved :: MIT License',
    'Operating System :: OS Independent',
    'Programming Language :: Python',
    'Programming Language :: Python :: 3.5',
    'Programming Language :: Python :: 3.6',
    'Programming Language :: Python :: 3.7',
    'Programming Language :: Python :: 3.8',
    'Programming Language :: Python :: 3.9',
    'Topic :: Documentation',
    'Topic :: Utilities',
  ],
  platforms='any',
  packages=find_packages(),
  include_package_data=True,
  install_requires=['Sphinx >= 1.8'],
  namespace_packages=['sphinxcontrib'],
)
