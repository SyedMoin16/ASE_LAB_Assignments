package com.example.syedm.ttsconvertor;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

/**
 * Created by syedm on 15-02-2017.
 */

public class registerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);
    }




public void register(View v){

        Intent redirect = new Intent(registerActivity.this, LoginActivity.class);
        startActivity(redirect);
    }


}

