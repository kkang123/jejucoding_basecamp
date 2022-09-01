
<h1> :computer: developer community in jeju :tangerine:  </h1>
<br>

> 제주도 개발자들을 위한 커뮤니티

<h3> <p align='center'><b>  배포URL </b></p> </h3>

<p align='center'><img src='(preview 동영상).gif?raw=1' width = '900' ></p>


## 1. introduction
`1.1 기획의도`
- COVID19으로 비대면 즉 재택 업무를 하는 회사의 증가, Digital nomad의 증가로 많은 사람들이 육지가 아닌 제주에서의 삶을 택했다.
- 한 달 살이, 2주살이 등 제주에서 일하는 사람이 늘어났고 그중 숙소와 작업 환경 세팅이 꼭 필요한 개발자들을 위한 커뮤니티 필요성 증가.
- 기본적인 숙소, 작업하기 좋은 환경을 가진 카페를 위주로 개발자를 위한, 개발자에 의한 커뮤니티 구축을 목표로 한다.

`1.2 주요 서비스`
- kakao map으로 제코베 실습처럼 구역을 나눠서 list up, login API 기능 추가
- 지도에서 개발을 하기 좋은 코워킹 스페이스와 카페에 대해 즐겨찾기를 제공
- 리뷰 기능 추가로 커뮤니티 시설 

## 2. Roles

- 김서현(PM, BE)
- 김지헌(FE, BE) 
- 최다봄(FE, BE)
- 김남우(BE) 


## 3. 프로젝트 구조와 개발 일정
3.1 프로젝트 구조

```
📦 jejucoding	
   ├─ .gitignore
   ├─ .github
   ├─ README.md
   ├─ Dockerfile
   ├─ Docker compose		
   ├─ requirements.txt		
   ├─ config/	          
   │  ├─ __init__.py
   │  ├─ asgi.py
   │  ├─ settings.py
   │  ├─ urls.py
   │  └─ wsgi.py
   ├─ main/
      ├─ templates/	
   │  └─ main/
      ├─ fixtures/
   │  └─ posts-data.json
   │  ├─ __init__.py
   │  ├─ admin.py
   │  ├─ apps.py
   │  ├─ models.py
   │  ├─ tests.py
   │  └─ views.py
   ├─ static/
   │  └─ css/
   ├─ media/
   ├─ venv/
   └─ manage.py
   └─ db.sqlite3

```

3.1 개발 일정 

| MM.DD | Details | PR | 
|---|:---:|:---:|
| 08.28 | project brain storming, role, git(issue, PR) study, TDD study |:---:|
| 08.29 | study for Frontend |:---:|
| 08.30 | study for Backend |:---:|
| 08.31 | DB migration error! change repository |:---:|
| 09.01 | create baseline, solved error, FE, BE, DB | [#2](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/2), [#3](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/3), [#4](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/4) |
| 09.02 | upodate docker, AWS, readme.md |:---:|


## 4. Usage
python v3.8.8, Django v3.2

```
git clone https://github.com/kim-seo-hyun/jejucoding_basecamp.git
python -m venv /venv 
pip install -r requirements.txt
```


## 5. Finish
- 김서현
- 김남우
- 김지헌
- 최다봄

