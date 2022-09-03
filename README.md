
<h1> :computer: Developer Space in jeju :tangerine:  </h1>
<br>


<h3> <p align='center'><b>  배포URL </b></p> </h3>

![spacefordevelopers](https://user-images.githubusercontent.com/87296126/188256698-5f4002db-77d3-4832-92a3-7dbe44b6debf.jpg)


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

- 김서현(PM, FE, BE)
- 김지헌(FE, BE) 
- 최다봄(FE, BE)
- 김남우(FE, BE) 


## 3. 프로젝트 구조와 개발 일정
3.1 프로젝트 구조

```
📦 jejucoding	
   ├─ .gitignore
   ├─ .github
   ├─ README.md
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
| 08.28 | project brain storming, role, git(issue, PR) study, TDD study |[.github](https://github.com/kim-seo-hyun/jejucoding_basecamp/tree/main/.github)|
| 08.29 | study for Frontend, Frontend Layout Setting |:---:|
| 08.30 | study for Backend |:---:|
| 08.31 | DB migration error! change repository |:---:|
| 09.01 | create baseline, solved error, FE, BE, DB | [#2](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/2) ~ [#12](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/12) |
| 09.02 | update docker, AWS, readme.md |[#14](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/14) ~ [#23](https://github.com/kim-seo-hyun/jejucoding_basecamp/pull/23)|


## 4. Usage
python v3.8.8, Django v3.2, AWS EC2

```
git clone https://github.com/kim-seo-hyun/jejucoding_basecamp.git
python -m venv /venv 
pip install -r requirements.txt
```


## 5. Finish
- 김서현 : 일단 다들 장고가 처음이라 어려운 상태에서도 모든 팀원이 포기하지 않고 끝까지 해줘서 고맙습니다. js 문법을 헤멨지만 끝까지 자기가 해결하려고 노력해줬던 지헌님, 그림 하나하나 그리면서 프론트와 백엔드 공부를 같이한 다봄님, git사용법부터 어려워했지만 끝까지 포기하지 않았던 남우님까지 덕분에 저도 힘내서 잘 마무리 할 수 있었습니다. 팀장으로서 더 많이 알려드리고 잘 이끌어가지 못한 부분이 아쉽습니다. DB문제로 장고 전체 셋팅을 혼자 다시하기도 하고 프론트, 백엔드, 배포까지 모든 부분을 신경쓰느라 많이 힘들기도 했지만 그만큼 성장한 것 같아 뜻깊은 경험이 된 것 같습니다. 다들 수고하셨습니다 👍

- 김남우 : 제코베 온·오프라인 강의를 수강하고 후속 해커톤에도 참여하면서 코딩 실력도 키울 수 있었고, 무엇보다 혼자서 할 수 있는 능력보다 집단지성을 활용해 그 이상의 능력을 발휘할 수 있었다는 것을 체감하는 계기가 되었습니다. 프로그래밍 언어는 이전에 학습해서 수월했었지만, 처음 접해본 Django로 웹 사이트를 구축하는 것이 그리 수월하지는 않아서 해커톤에서 나름대로 구글링과 질문을 통해 해결하려고 했습니다. 개발에서 협업을 할 수 있는 기회를 얻을 수 있어서 만족스러웠고 실무 감각도 어느 정도 익힐 수 있어서 꽤 유익했습니다.

- 김지헌 : 지도 api에 db 연결을 제대로 못하여 답답하고 분했지만 팀원들과 함께 계속 회의하면서 구상한 것을 만들어 가는 과정이 재미있었고 지금껏 어려웠던 깃허브 협업이였는데 팀원 분들에게 도움을 받아 많이 배웠고 깃허브 관련해서 남들에게 가르쳐줄 수 있는 실력이 된 거 같아 뜻 깊었고, 좋은 경험이었습니다. 같이 고생하신 다봄님, 서현님, 남우님 고생하셨습니다!

- 최다봄 : 간단한 웹사이트를 만드는 것도 기획부터 구조 그리고 배포..까지 꼼꼼하게 짜야한다는 것을 알게되었습니다. 프론트, 백 모두 거의 처음 다뤄봤는데 같이 모르는거 도우면서 해결해나갈 수 있어서 다행이었습니다. db migrate 하는 부분에서 오류가 생겨서 처음부터 다시 만드신 서현언니 고생 많으셨습니다. ㅠ 이슈, 커밋, pr과 오류x100 와의 시간이었지만 git으로 제대로 된 협업을 해봤고, 장고로 처음부터 만들어볼 수 있는 좋은 경험이었습니다. 서현님, 지헌님, 남우님 고생많으셨습니다 🙂

