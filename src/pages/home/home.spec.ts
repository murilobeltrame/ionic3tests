import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { MyApp } from "../../app/app.component";
import { HomePage } from "./home";
import { IonicModule, NavController } from "ionic-angular";
import { NavMock } from "../../../test-config/mocks-ionic";

let fixture: ComponentFixture<HomePage>
let comp: HomePage

describe('Home page', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp, HomePage],
      providers: [
        {provide: NavController, useClass: NavMock}
      ],
      imports: [
        IonicModule.forRoot(MyApp)
      ]
    }).compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage)
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

})
