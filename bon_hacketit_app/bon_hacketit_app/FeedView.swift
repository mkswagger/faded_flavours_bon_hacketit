//
//  FeedView.swift
//  bon_hacketit_app
//
//  Created by Shinjan Patra on 09/04/23.
//

import SwiftUI

struct FeedView: View {
    var body: some View {
        VStack{
            HeaderView()
            
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .background{
            Color("colour2")
                .ignoresSafeArea()
        }
    }
    @ViewBuilder
    func HeaderView()->some View{
        HStack{
            Button{
                
            }label: {
                HStack(spacing: 10){
                    Image("pic")
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(width: 35, height: 35)
                        .clipShape(Circle())
                    Text("Shinjan")
                        .font(.system(size: 14,weight: .semibold))
                        .foregroundColor(.black)
                }
                .padding(.leading, 8)
                .padding(.trailing, 12)
                .padding(.vertical,6)
                .background{
                    Capsule()
                        .fill(Color("colour1"))
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            Button{
                
            }label: {
                Image(systemName: "cart")
                    .font(.title2)
                    .foregroundColor(.black)
                    .overlay(alignment: .topTrailing){
                        Circle()
                            .fill(.white)
                            .frame(width: 10, height: 10)
                            .offset(x:2, y: -5)
                        
                    }
            }
        }
        .padding(15)
        
    }
    var attributedTitle: AttributedString{
        var attString = AttributedString(stringLiteral: "Good Food,")
        if let range = attString.range(of: "Food,"){
            attString[range].foregroundColor = .white
        }
        return attString
    }
    var attributedSubTitle: AttributedString{
        var attString = AttributedString(stringLiteral: "Good Food,")
        if let range = attString.range(of: "Food,"){
            attString[range].foregroundColor = .white
        }
        return attString
}

struct FeedView_Previews: PreviewProvider {
    static var previews: some View {
        FeedView()
    }
}
