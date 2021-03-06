package com.srnpr.yeshospital.genapp;

import com.facebook.react.ReactActivity;
import com.microsoft.codepush.react.CodePush;
import com.liuchungui.react_native_umeng_push.UmengPushPackage;
import com.eguma.barcodescanner.BarcodeScanner;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.oney.WebRTCModule.WebRTCModulePackage;
import com.srnpr.yeshospital.genapp.BuildConfig;
import com.srnpr.yeshospital.genapp.R;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {


    @Override
    protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "YxlProject";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new CodePush(this.getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), this, BuildConfig.DEBUG),
            new UmengPushPackage(),
            new BarcodeScanner(),
            new RCTCameraPackage(),
            new ImagePickerPackage(),
                new WebRTCModulePackage()
        );
    }
}
