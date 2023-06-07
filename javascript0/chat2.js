
    // - 설명
    // - role
    //     - **system** : assistant의 역할을 지정해줍니다. (필수로 들어가야하는 항목입니다.)
    //     - **user** : 사용자의 질문 내용을 적을때 사용합니다.
    //     - **assistant** : assistant(AI)가 답변한 내용을 적을때 사용합니다.

    // - content : 메세지 내용
    //     - role이 system인 경우는 AI의 역할을 지정하는 문구입니다.
    //         - 예시)
    //             - You are a helpful assistant.
    //             - assistant는 친절한 파이썬 알고리즘의 힌트를 주는 선생님이다.
    //             - assistant는 시인이다.
    //     - role이 user인 경우에는 유저가 보내는 질문 입니다.
    //         - 예시)
    //             - "지구는 왜 파란가요?"
    //             - "Who won the world series in 2020?"
    //     - role이 assistant 인경우에는 AI가 응답한 답변입니다.
    

        let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;


        // let $hobbyInput = document.getElementById('#hobby')
        // let $techStackInput = document.getElementById('#tech-stack')
        // let $etcInput = document.getElementById('#textarea1')
        
        let $button1 = document.querySelector('#button1')


        // 학습 데이터들을 넣는 곳
        let data = [{
            "role": "system",
            "content": "assistant는 개발자 양성 교육 전문가이다."
        }, {
            "role": "user",
            "content": "파이썬은 무엇인가요?",
            "content": "장고란 무엇인가요?",
            "content": "html과 css는 무엇인가요?",
            "content": "자바스크립트는 무엇인가요?",
            "content": "성별이 무엇인가요?",
            "content": "전공자인가요?",
            "content": "개발경험이 있나요?",
            "content": "주 사용 언어는 무엇인가요?",
            "content": "기타 기술 스택과 프로젝트 경험이 있나요?",
            "content": "비전공자도 개발자를 할 수 있을까?",
            "content": "파이썬 일주일 학습전략 알려줘.",
            
                
        }, {
            "role": "assistant", 
            "content": "파이썬(Python)은 프로그래밍 언어 중 하나로, 사용하기 쉽고 배우기 쉬워 많은 사람들이 처음 배울 때 선택하는 언어 중 하나입니다. 파이썬은 인터프리터 언어로, 프로그램을 작성한 후에 즉시 실행 결과를 확인할 수 있어 개발 속도가 빠릅니다. 또한, 다양한 분야에서 활용될 수 있도록 여러 라이브러리와 프레임워크가 제공되어 있어서 데이터 분석, 인공지능, 웹 개발 등 다양한 분야에 사용됩니다. 그 외에도, 파이썬은 대용량의 작업을 간단한 코드로 자동화할 수 있는 기능을 제공하기 때문에, 기업에서는 업무 자동화에 활용되기도 합니다.",
            "content": "장고(Django)는 파이썬으로 작성된 무료 오픈소스 웹 프레임워크입니다. 웹 개발을 빠르고 쉽게 할 수 있도록 많은 기능을 제공합니다. MVC 패턴을 기반으로 한 MTV 패턴(Model-Template-View)을 사용하고 있습니다. 이 패턴은 웹 개발에서 데이터, 사용자 인터페이스, 비즈니스 로직을 분리해 유지보수와 확장성을 높여줍니다. Django는 ORM(Object-Relational Mapping)을 사용하여 데이터베이스 연동을 간편하게 할 수 있도록 지원합니다. 또한, 관리자 페이지 기능과 같은 편리한 기능이 내장되어 있어 개발자의 생산성을 높여줍니다. Django는 대부분의 수요를 충족할 수 있는 강력한 기능들을 제공하며, 페이스북, 인스타그램과 같은 대규모 웹 서비스에서도 사용되고 있습니다.",
            
            "content": "파이썬을 공부하는 계획을 짜는 것은 중요합니다. 파이썬을 처음 공부하는 초보자라면, 아래의 가이드라인이 도움이 될 것입니다.\
                        1. 파이썬 언어 기초 학습: 파이썬을 공부하기 전에, 파이썬의 기본 개념과 구문을 학습해야 합니다. 변수, 조건문, 반복문, 함수 등 파이썬의 기초를 알아보십시오.\
                        2. 파이썬 문제 풀기: 파이썬을 공부하면서 문제를 통해 실습하는 것이 중요합니다. 기초 문제부터 어려운 문제까지 다양한 난이도의 문제를 풀어보십시오.\
                        3. 온라인 강의 수강: 파이썬 공부를 위해 인터넷에는 많은 무료 온라인 강좌가 있습니다. 쉽게 접근할 수 있으니 권장합니다.\
                        4. 마인드맵 작성: 파이썬 공부를 계획하면서 마인드맵을 작성하는 것은 도움이 됩니다. 핵심 개념과 파생 개념, 각 주제간 관계를 시각화해 보십시오.\
                        5. 프로젝트 개발: 파이썬 공부할 때, 여러 프로젝트를 개발하면 실력 향상에 도움이 됩니다. 웹 크롤링, 간단한 게임 개발, 데이터 분석 등 파이썬으로 새로운 것을 만들어 볼 것을 추천합니다.\
                        참고로, 일정 기간만 주어져 있으면 파이썬을 제대로 마스터하기 어렵다고 판단됩니다. 가능하면 꾸준히 연습하고, 계속해서 만족스럽고 흥미로운 코딩을 할 수 있도록 노력해보십시오.",
                                    
            "content": "네, 비전공자도 개발자가 될 수 있습니다. 기본적으로 개발자가 되기 위해서는 프로그래밍 언어를 배우고, 문제 해결 능력을 갖추는 것이 중요합니다. 이를 위해 대학이나 전문 교육 기관에서 전공을 공부하는 것도 좋지만, 최근에는 인터넷을 통해서도 자기 주도적으로 학습하는 것이 가능합니다. 또한, 많은 회사들이 비전공자를 대상으로 하는 코딩 교육 프로그램이나 부트캠프를 운영하고 있어서, 비전공자도 이를 통해 개발자로 전환할 수 있습니다. 이 경우에는 집중력과 열정, 문제 해결 능력, 협업 능력 등의 역량이 중요합니다.",

            "content": "파이썬을 일주일 동안 배우려면 다음과 같은 학습 전략을 추천합니다:\
                        1. 기본 개념 이해하기: 파이썬의 기본적인 개념과 문법을 이해하는 것이 매우 중요합니다. 데이터 타입, 연산자, 변수, 함수, 제어문 등을 배우고 이해해야 합니다.\
                        2. 코딩 연습하기: 파이썬을 배우는 가장 좋은 방법은 코딩을 많이 해보는 것입니다. 예제 코드를 작성하고, 실행시켜 보며 어떻게 동작하는지 이해해보세요.\
                        3. 프로젝트 구상하기: 어떤 프로젝트를 할 것인지 먼저 구상해보세요. 예를 들면, 간단한 게임 만들기, 텍스트 파일 읽고 쓰기, 웹 스크래핑 등이 있을 수 있습니다.\
                        4. 책이나 강의 수강하기: 파이썬을 배우는 데 가장 좋은 방법 중 하나는 책이나 온라인 강의를 수강하는 것입니다. 이 방법으로 입문용 서적이나 인터넷에서 접할 수 있는 무료 강의 등을 찾아보시면 좋습니다.\
                        5. 동영상 강의 시청하기: 온라인에는 여러 무료 동영상 강의가 많이 있습니다. 이런 동영상 강의를 시청하면서 파이썬 개발 과정에 대해 이해할 수 있습니다.\
                        6. 다른 사람의 코드 참고하기: 파이썬 개발에 있어 다른 사람의 코드를 보는 것은 매우 유익한 방법입니다. 이렇게 하는 것으로 어떻게 개발되고 있는지 이해하고 배울 수 있습니다.\
                        7. 지속적인 학습: 일주일 동안 파이썬을 배우면서 그렇게 많은 것을 배울 수는 없습니다. 그러므로 꾸준한 학습을 지속하면서 계속해서 더 많은 것을 배우고 완성도 높은 코드를 만들 수 있도록 노력해보세요."
                    
    
        },{
            "role": "user", "content": "표로 나타내어 주세요.",
            "role": "user", "content": "나타낸 표의 칸 크기는 최대 글자수를 기준으로 설정하고 글자를 가운데정렬 해주세요.",
            "role": "user", "content": "초보자도 이해할 수 있도록 쉬운 용어로 설명해주세요."

            
        }]
        
        // $button1.addEventListener('click', e =>{
        //     e.preventDefault()
        //     userInputData = $input1.value
        

        //     data.push({
        //         "role": "system", "content": userInputData,
        //         "role": "user", "content": userInputData
        //         // "role": "assistant", "content": "부산에는 다양한 맛집이 많이 있어서 추천해드릴 수 있어요. 각 지역별로 추천해드릴게요! | 지역 | 맛집 이름 | 추천 메뉴 | |--------|----------------------|--------------| | 해운대 | 프라임앤쉐프 해운대점 | 스테이크 | | | 모이바바 해운대점 | 타코, 와인 | | 서면 | 아비꼬 | 파스타 | | | 서면횟집 | 회 | | 광안리 | 카페하임 | 디저트 | | | 광안리 반점 | 짜장면, 탕수육| 부산에는 맛있는 음식을 제공하는 맛집이 많으니 다양한 맛집을 찾아보시면 좋을 것 같아요!",
        //         // "role": "assistant", "content": "제가 이전에 작성한 답변에서 표를 제대로 표기하지 못해서 죄송합니다. 이번에는 맞게 작성했으니 확인해주세요. | 지역 | 맛집 이름 | 추천 메뉴 | |--------|----------------------|--------------| | 해운대 | 프라임앤쉐프 해운대점 | 스테이크 | | | 모이바바 해운대점 | 타코, 와인 | | 서면 | 아비꼬 | 파스타 | | | 서면횟집 | 회 | | 광안리 | 카페하임 | 디저트 | | | 광안리 반점 | 짜장면, 탕수육| 부산에는 맛있는 음식을 제공하는 맛집이 많으니 다양한 맛집을 찾아보시면 좋을 것 같아요!"
                
        //         //"role": "user", "content": userInputData
        //     }) 
        //     //답변 목록도 push를 하면 맥락을 이해하여 답변이 가능하다.
        //     // day1, day2, day3와 같은 형식으로 답변을 해줘! 라고 미리 학습시켜놓으면
        //     // split('day') 이런 식으로 카드를 만들 수 있다.

        //     $input1.value = ''
        //     chatGptAPI()
        // })


        // 사용자가 선택한 입력 데이터를 객체를 만들어서 push
        const makeData = function () {
            // 취미 데이터 읽어오기
            let $hobbyInput = document.getElementById("hobby");
            hobby = $hobbyInput.value;

            // 기술스택 데이터 읽어오기
            let $techStackInput = document.getElementById("tech-stack");
            techStack = $techStackInput.value;
        
            // 기타입력 및 최종질문 데이터 읽어오기
            let $etcInput = document.getElementById("textarea1");
            etc = $etcInput.value
        
            // userInputData = etc
            data.push({
                //"role": "system", "content": userInputData,
                //"role": "user", "content": userInputData
                
                //"role": "user", "content": userInputData

                role: "system",
                content: `스터디 플랜을 만들어 줘. 취미:${hobby}, 기술스택:${techStack}, 기타정보:${etc} \n 이 데이터를 기반으로 스터디 플랜을 짜줘`,
            
                role: "user",
                content: `스터디 플랜을 만들어 줘. 취미:${hobby}, 기술스택:${techStack}, 기타정보:${etc} \n 이 데이터를 기반으로 스터디 플랜을 짜줘`
            })

            $hobbyInput.value = ''
            $techStackInput.value = ''
            $etcInput.value = ''
        };


        $button1.addEventListener('click', e =>{
            e.preventDefault()
            makeData();

            //$textarea1.value = ''
            chatGptAPI()

            //답변 목록도 push를 하면 맥락을 이해하여 답변이 가능하다.
            // day1, day2, day3와 같은 형식으로 답변을 해줘! 라고 미리 학습시켜놓으면
            // split('day') 이런 식으로 카드를 만들 수 있다.
        });


        const chatGptAPI = async () => {
            const result = await fetch(url, {    
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                redirect: "follow",
            })
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                // console.log(res.choices[0].message.content)

                for (const i of data) {
                    document.querySelector('#contents_question').innerHTML = "입력된 정보와 질문하신 [" + etc + "] 을(를) 토대로 구성한 답변은 아래와 같습니다."
                    document.querySelector('#contents_response').innerText = res.choices[0].message.content
                }
            
                // document.querySelector('#contents_response').innerText = res.choices[0].message.content
                
            })
            .catch((err) => {
                alert('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
                document.write('서버가 멈췄습니다. 최대한 빠르게 복구하도록 하겠습니다.')
            });
        };
