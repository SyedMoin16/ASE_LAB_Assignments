package com.example.syedm.ttsconvertor;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;


    public class LoginActivity extends AppCompatActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_login);
            Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
            setSupportActionBar(toolbar);

        }

        public void register(View v){
            Intent redirect = new Intent(LoginActivity.this, registerActivity.class);
            startActivity(redirect);

        }

        @Override
        public boolean onCreateOptionsMenu(Menu menu) {
            // Inflate the menu; this adds items to the action bar if it is present.
            getMenuInflater().inflate(R.menu.menu_login, menu);
            return true;
        }

        @Override
        public boolean onOptionsItemSelected(MenuItem item) {
            // Handle action bar item clicks here. The action bar will
            // automatically handle clicks on the Home/Up button, so long
            // as you specify a parent activity in AndroidManifest.xml.
            int id = item.getItemId();

            //noinspection SimplifiableIfStatement
            if (id == R.id.action_settings) {
                return true;
            }

            return super.onOptionsItemSelected(item);
        }

        public void checkCredentials(View v) {
            EditText usernameCtrl = (EditText) findViewById(R.id.txt_uname);
            EditText passwordCtrl = (EditText) findViewById(R.id.txt_Pwd);
            TextView errorText = (TextView) findViewById(R.id.lbl_Error);
            String userName = usernameCtrl.getText().toString();
            String password = passwordCtrl.getText().toString();

            boolean validationFlag = false;
            //Verify if the username and password are not empty.
            if (!userName.isEmpty() && !password.isEmpty()) {
                if (userName.equals("Admin") && password.equals("Admin")) {
                    validationFlag = true;

                }
            }
            if (!validationFlag) {
                errorText.setVisibility(View.VISIBLE);
            } else {
                //This code redirects the from login page to the home page.
                Intent redirect = new Intent(LoginActivity.this, TtsActivity.class);
                startActivity(redirect);
            }

        }



    }
