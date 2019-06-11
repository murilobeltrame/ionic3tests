import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { MyApp } from "./app.component";
import { IonicModule, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { PlatformMock, SplashScreenMock, StatusBarMock } from "../../test-config/mocks-ionic";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HomePage } from "../pages/home/home";

let fixture: ComponentFixture<MyApp>
let comp: MyApp

describe('Root component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      providers:[
        {provide: Platform, useClass: PlatformMock},
        {provide: SplashScreen, useClass: SplashScreenMock },
        {provide: StatusBar, useClass: StatusBarMock}
      ],
      imports:[
        IonicModule.forRoot(MyApp)
      ]
    }).compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp)
    comp = fixture.componentInstance
  })

  afterEach(() => {
    fixture.destroy()
    comp = null
  })

  it('is created', () => {
    expect(fixture).toBeTruthy()
    expect(comp).toBeTruthy()
  })

  it('initialises with a root page of HomePage', () => {
    expect(comp['rootPage']).toBe(HomePage)
  })

})
