package com.example.syedm.clicker;

import android.app.Activity;
import android.os.Bundle;
import android.support.wearable.view.WatchViewStub;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends Activity {

    private TextView mTextView;

    Button btnClick;
    Button btnReset;

    TextView txtCount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.round_activity_main);
        final WatchViewStub stub = (WatchViewStub) findViewById(R.id.watch_view_stub);

       btnClick= (Button) findViewById(R.id.buttonClick);
        btnReset= (Button)findViewById(R.id.buttonReset);
        txtCount=(TextView)findViewById(R.id.textViewCount);


        btnClick.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String countValue= txtCount.getText().toString();

                int intCountValue=Integer.parseInt(countValue);

                intCountValue++;

                txtCount.setText(String.valueOf(intCountValue));
            }
        });

        btnReset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                txtCount.setText(String.valueOf(0));

            }
        });


    }

}
