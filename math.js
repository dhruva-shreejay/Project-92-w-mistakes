var player1score = 0;
var player2score = 0;

document.getElementById("player1_n").value = localStorage.getItem("player1_name", player1) + ": " + player1score;
document.getElementById("player2_n").value = localStorage.getItem("player2_name", player2) + ": " + player2score; 

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info onclick = 'check();'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check()
{
    question_turn = "player1_turn";
    answer_turn = "player2_turn";
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        update_player1_score = player1score + 1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player2_score = player2score + 1;
        document.getElementById("player2_score")
    }

    if(question_turn == "player1_turn")
    {
        question_turn = "player2_turn";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else
    {
        question_turn = "player1_turn";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
}



