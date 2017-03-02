package com.github.dracute.fullscreendemo;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class LoginActivity extends AppCompatActivity {

    Button ImgButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        ImgButton= (Button)findViewById(R.id.button);
    }

public void ImgTransfer(View v)
{
    Intent i= new Intent(LoginActivity.this , MainActivity.class);
    startActivity(i);
    }




}
