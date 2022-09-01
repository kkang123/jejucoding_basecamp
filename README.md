
<h1> :computer: developer community in jeju :tangerine:  </h1>
<br>

> 제주도 개발자들을 위한 커뮤니티

<h3> <p align='center'><b>  배포URL </b></p> </h3>

<p align='center'><img src='(preview 동영상).gif?raw=1' width = '900' ></p>


## 1. introduction
`1.1 기획의도`
- COVID19으로 비대면 즉 재택 업무를 하는 회사의 증가, Digital nomad의 증가로 많은 사람들이 육지가 아닌 제주에서의 삶을 택했다
- 한달살이, 2주살이등 제주에서 일하는 사람이 늘어났고 그 중 많은 비중을 차지하는 개발자들을 위한 커뮤니티를 만들어 소개해보려한다. 
- 기본적인 숙소, 작업하기 좋은 환경을 가진 카페를 위주로 개발자를 위한, 개발자에 의한 커뮤니티 구축을 목표로 한다.

`1.2 주요 서비스`
- kakao map API를 받아와 숙소, 카페 list를 보여주고
- 그중 개발을 하기 좋은 코워킹 스페이스와 카페에 대해 즐겨찾기를 제공
- 리뷰를 쓸 수 있는 게시판으로 소통

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
| 08.28 | project brainstorming, role, git(issue, PR) study, TDD study |:---:|
| 08.29 | study for Frontend |:---:|
| 08.30 | study for Backend |:---:|
| 08.31 | DB migration error! change repository |:---:|
| 09.01 | create baseline, solved error, FE, BE, DB | #2,3,4 |
| 09.02 | upodate docker, AWS, readme.md |:---:|


## 4. Usage
python v3.8.8, Django v3.2

```
```


## 5. Finish
- 김서현
- 김남우
- 김지헌
- 최다봄

