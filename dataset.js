
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}

let d1 = new DataSet("선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("공부시간과 성적과의 관련선의 선형성을 가진 연속적인 데이터를 활용하여 연속된 예상값을 추출하는 모델")//서브 타이틀
d1.set_img(0,{imgtitle:"일부코드샘플",imgurl:"https://drive.google.com/file/d/1aTIM1Li9X9R51luTiPq0jN5XXcDBFKvF/view?usp=drive_link",imglog:"시험성적데이터를 임으로 만들어 선영회귀분석 코드",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터분석",imgurl:"https://drive.google.com/file/d/1zQbjjS7nVTkrTw001T_y0jr4u8CgVwSx/view?usp=drive_link",imglog:"문제데이터의 선형성 관계 파악을 위한 산점도 그래프분석",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"데이터전처리",imgurl:"https://drive.google.com/file/d/17Tnnnr0v3HGa6xNz7bBiM4iG_byz-xep/view?usp=drive_link",imglog:"훈련시 모델의 올바른 학습을 위해 데이터를 정규분포로 표준화 전처리 시행",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"선형모델의 구성, 컴파일, 훈련",imgurl:"https://drive.google.com/file/d/1x-WFVqI_aCA9fEFiYwxcdZTsCb_ADfRi/view?usp=drive_link",imglog:"Sequential모델 및 입력출력레이어 작성과 MSE오차손실함수 및 SGD(경사하강법) 최적화함수 적용과 200회 훈련 실행",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"훈련결과의 시각화",imgurl:"https://drive.google.com/file/d/1XzfHkA7SNPB3pK7WwpAqjyp4_LlvhV2Q/view?usp=drive_link",imglog:"시각화 그래프 판단시 120회 훈련에서 조기종료를 검토할 수 있다.",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀
d1.set_img(0,{imgtitle:"모델의 예측",imgurl:"https://drive.google.com/file/d/1VKl5vAyJeCTuncuGAzc2aA8RdjloROw4/view?usp=drive_link",imglog:"임의의 데이터를 생성하여 모델의 예측 결과를 표기",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d1.set_content("당뇨환자에 대한 1년 상태 예측, 예측값은 연속데이터로 출력")
d1.set_img(1,{imgtitle:"샘플소스코드",imgurl:"https://drive.google.com/file/d/1QLeTbKK8bZhG2AjCYUwKEgnUrENZu4Rr/view?usp=drive_link",imglog:"당뇨환자에 대한 나이, 성별 드응ㄹ 10개의 항목을 측정하여 1년후 당뇨수치에 대한 증감",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"소스데이터수신 및 분석",imgurl:"https://drive.google.com/file/d/1m-c3ByMhovc3LcNj8J0VNOQvxYcoClYd/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"연관성분석을 위한 산점도",imgurl:"https://drive.google.com/file/d/12kR-2x0HH-YFASmgXMLgCoz9Plr1Cc_A/view?usp=drive_link",imglog:"1년후 질량과 측정된 수치의 연관성 분석을 위한 산점도 그래프",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"선택데이터1",imgurl:"https://drive.google.com/file/d/1dm_1G5pK5bSmcH0EPXdV_ZbFbhFqKEtS/view?usp=drive_link",imglog:"hmi 대각방향의 선형형태를 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"선택데이터2",imgurl:"https://drive.google.com/file/d/1apErmJqXU7narfpyUxRUif1xlt0Suw2d/view?usp=drive_link",imglog:"s5 대각방향의 선형형태를 띄고 있어 1년후 질량과 연관이 있는 데이터로 판명",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"미선택데이터",imgurl:"https://drive.google.com/file/d/13coTLRnGwboSo0AbUBcLoYa4mukuC392/view?usp=drive_link",imglog:"선형성이 없으므로 1년후 질량과 연관이 없음으로 판명되어 분석에서 제외",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터추출",imgurl:"https://drive.google.com/file/d/16R1UucwcqcEjO-YPwffGWxd7HyTCKif6/view?usp=drive_link",imglog:"선택된 2,8번의 인덱스 데이터 추출 및 데이터 모양 확인 후 문제데이터와 정답데이터 값 확인분석",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"모델구성과 훈련",imgurl:"https://drive.google.com/file/d/1Dyr1ZeiItgLdOcnWT0MQgTB8UJ1VlBbT/view?usp=drive_link",imglog:"순차모델구성과 입출력 레이 구성, MSE손실함수와 SGD를 최적화함수 사용하여 컴파일 및 훈련 13회 실행",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"훈련결과시각화",imgurl:"https://drive.google.com/file/d/1r2UtW9Bs48VS7RSA3_eMIc3iICKb0QG9/view?usp=drive_link",imglog:"100회 이상의 훈련후 시각그래프 판단하에 12회 훈련이 최적화로 판단되어 12회 훈련으로 조기 종료함",sourceurl:""})//이미지타이틀
d1.set_img(1,{imgtitle:"데이터 예측",imgurl:"https://drive.google.com/file/d/1rUDXKNqdt5yoyEfgELIil8yYoHlty6CE/view?usp=drive_link",imglog:"테스트 데이터를 10개를 추출하여 예측 실행, 결과는 오차확률 4% 수치대로 접근",sourceurl:""})//이미지타이틀


d1.set_content("보스톤 지역의 환경에 따른 하우수 가격 데이터로 예측값은 연속데이터로 출력")
d1.set_img(2,{imgtitle:"보스톤하우징샘플코드",imgurl:"https://drive.google.com/file/d/1cxvyiZUGIS2jytv1hshdszbeRG8gEpeu/view?usp=drive_link",imglog:"총 12개 유형의 데이터로 범죄율, 주거토지비율, 회사입지비율, 강의 경계 여부, 일산화질소농도, 방의 갯수 등의 데이터 분석하여 집가격을 예측하는 시나리오",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"데이터연관성 산점도 분석 코드",imgurl:"https://drive.google.com/file/d/13ajEcwG8DxiC3kExY_7q48Tua2ARiIl7/view?usp=drive_link",imglog:"데이터 연관성 분석을 위해 데이터 항목별 산점도 시각화",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1oDskPlJYzrf79dqY6Ld-R10QTLJjVDow/view?usp=drive_link",imglog:"분석결과 5번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"산점도 시각화 그래프",imgurl:"https://drive.google.com/file/d/1pcDvXZxToxfzgOH4Y3jxHKJIA3lkGfNf/view?usp=drive_link",imglog:"분석결과 7번 인덱스 그래프의 선형방향성 확인 선택",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련을 위한 데이터 선택",imgurl:"https://drive.google.com/file/d/15swfoI58ga8evQsPnEFFZK2db-Lnt-HC/view?usp=drive_link",imglog:"5번 인덱스 데이터와 7번 인덱스 데이터의 선형성 확인결과로 확인데이터로 추출후 선형성 재확인",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련데이터 전처리",imgurl:"https://drive.google.com/file/d/19eRwtS_M8MxylFHygNaexFWzzEnEOq2l/view?usp=drive_link",imglog:"훈련데이터의 수치 폭을 확인 후 정규분포데이터로 표준화 실행",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"모델 구성 및 훈련",imgurl:"https://drive.google.com/file/d/1aes5fFNb0oKs9dDHslyY6PNyQjeqIrWN/view?usp=drive_link",imglog:"순차모델 구성과 입출력레이어 추가, MSE 손실함수 및 SGD 최적화함수를 적용하여 컴파일, 10회 훈련 실시",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"훈련결과 시각화",imgurl:"https://drive.google.com/file/d/1OS3P4eBenEPb2bX2ItzbbHI7azeltwCV/view?usp=drive_link",imglog:"훈련결과 손실값을 시각화 그래프 출력 결과 분석 및 확인",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트데이터 추출",imgurl:"https://drive.google.com/file/d/1Ywkc5uzrhnmg_g_3Q7iv0fGylcX4F6j3/view?usp=drive_link",imglog:"테스트데이터 필드 추출 및 정규화 실행",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"테스트 결과 추출",imgurl:"https://drive.google.com/file/d/1bTN4HwzJpBAQnowiTTZlo-BZUha1ianF/view?usp=drive_link",imglog:"테스트데이터 예측 확률 23.05%",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀

d1.set_fill("선형 분석을 위한 데이터 표준화 및 훈련실행시 연관된 데이터를 수집, 분석하여 데이터를 선택함이 중요하게 생각된다.")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀
d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d2.set_img(1,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d2.set_img(2,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1nnSKw0su1NKkr-4O3bXNv33_ZZ8D54Qk/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/1fYO-WllL1nq8-qJC6Aj8fTeQplv7hvQzxUfRQAgAamo/edit?usp=drive_link"})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_content("회원로그인구현")
d3.set_content("회원리스트연동")
d3.set_content("테스트케이스 작성")
d3.set_content("목오브젝트생성 및 테스트 구현")
d3.set_content("결과보고서 작성")
d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀

d4.set_content("배치프로그램테스트 구현")

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
