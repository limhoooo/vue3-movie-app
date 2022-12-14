### scss 사용시
__!default__ 를 사용하면 차후 재정의가 가능한 스타일변수이다.<br>
ex :) $primary: #FDC000;<br>
부트스트랩의 primary class 의 스타일을 재정의<br>

### 프로젝트 경로 별칭 설정
.config.js 에서 경로의 별칭을 설정할수있음<br>
ex :) '~': path.resolve(__dirname, 'src'),<br>

### eslint 특정 확장자 제외
.eslintrc.js 파일에 <br> 
ignorePatterns: "**/*.md", 추가

### RouterLink active class
RouterLink 사용시 클릭한 태그에 active class 를 삽입할때
```
<RouterLink
  :to="nav.href"
  active-class="active"
  class="nav-link">
{{ nav.name }}
</RouterLink>
```
active-class 프로퍼티로 변경가능하다