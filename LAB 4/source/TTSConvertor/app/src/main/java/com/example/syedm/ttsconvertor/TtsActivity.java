package com.example.syedm.ttsconvertor;

/**
 * Created by syedm on 12-02-2017.
 */

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import java.util.Locale;
import android.widget.Toast;

public class TtsActivity extends Activity {
    TextToSpeech t1;
    EditText ed1;
    Button b1;
    Button b2;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tts);
        ed1=(EditText)findViewById(R.id.txt_Email);
        b1=(Button)findViewById(R.id.btn_Search);
        b2=(Button)findViewById(R.id.btn_Logout);

        t1=new TextToSpeech(getApplicationContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if(status != TextToSpeech.ERROR) {
                    t1.setLanguage(Locale.UK);
                }
            }
        });

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String toSpeak = ed1.getText().toString();
                Toast.makeText(getApplicationContext(), toSpeak,Toast.LENGTH_SHORT).show();
                t1.speak(toSpeak, TextToSpeech.QUEUE_FLUSH, null);
            }
        });

//This is used for logout
        b2.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Intent redirect = new Intent(TtsActivity.this, LoginActivity.class);
                startActivity(redirect);
            }

        });


    }


    public void onPause(){
        if(t1 !=null){
            t1.stop();
            t1.shutdown();
        }
        super.onPause();
    }

//    public void logout(View v) {
//        Intent redirect = new Intent(TtsActivity.this, LoginActivity.class);
//        startActivity(redirect);
//    }
}